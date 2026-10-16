import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-debug-profile3';

const chromeProc = spawn(chromePath, [
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--no-sandbox',
  'about:blank'
]);

async function run() {
  await new Promise(r => setTimeout(r, 1500));
  
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const version = await versionRes.json();

  const browserWs = new WebSocket(version.webSocketDebuggerUrl);
  browserWs.onopen = async () => {
    browserWs.send(JSON.stringify({
      id: 1,
      method: 'Target.createTarget',
      params: { url: 'http://localhost:5173' }
    }));
  };

  browserWs.onmessage = async (e) => {
    const msg = JSON.parse(e.data);
    if (msg.id === 1) {
      const targetId = msg.result.targetId;
      const pageWs = new WebSocket(`ws://127.0.0.1:9222/devtools/page/${targetId}`);

      pageWs.onopen = () => {
        pageWs.send(JSON.stringify({ id: 101, method: 'Runtime.enable' }));
        pageWs.send(JSON.stringify({ id: 102, method: 'Log.enable' }));
      };

      pageWs.onmessage = (pe) => {
        const pdata = JSON.parse(pe.data);
        if (pdata.method === 'Runtime.consoleAPICalled') {
          console.log('[BROWSER]', pdata.params.type, pdata.params.args.map(a => typeof a.value === 'object' ? JSON.stringify(a.value) : (a.value !== undefined ? a.value : a.description)).join(' '));
        } else if (pdata.method === 'Runtime.exceptionThrown') {
          console.error('[BROWSER EXCEPTION]', pdata.params.exceptionDetails.text, pdata.params.exceptionDetails.exception?.description);
        } else if (pdata.id === 200) {
          console.log('[PAGE INSPECTION]', JSON.stringify(pdata.result?.result?.value, null, 2));
        }
      };

      setTimeout(() => {
        pageWs.send(JSON.stringify({
          id: 200,
          method: 'Runtime.evaluate',
          params: {
            expression: `({
              app: !!window.app,
              canvas: !!document.querySelector('canvas'),
              canvasSize: document.querySelector('canvas') ? { w: document.querySelector('canvas').width, h: document.querySelector('canvas').height } : null,
              planetsCount: window.app?.solarSystem?.planets?.length,
              starCount: window.app?.starSystems?.stars?.length,
              camera: window.app ? { x: window.app.camera.position.x, y: window.app.camera.position.y, z: window.app.camera.position.z } : null
            })`,
            returnByValue: true
          }
        }));
      }, 6000);

      setTimeout(() => {
        pageWs.close();
        browserWs.close();
        chromeProc.kill();
        process.exit(0);
      }, 8000);
    }
  };
}

run().catch(err => {
  console.error(err);
  chromeProc.kill();
  process.exit(1);
});
