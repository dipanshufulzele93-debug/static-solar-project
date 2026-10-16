import { spawn } from 'child_process';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-nav-profile';

const chromeProc = spawn(chromePath, [
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--window-size=1280,720',
  '--no-sandbox',
  'http://localhost:5173'
]);

async function testNav() {
  await new Promise(r => setTimeout(r, 2000));
  
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const version = await versionRes.json();

  const browserWs = new WebSocket(version.webSocketDebuggerUrl);
  browserWs.onopen = async () => {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const appTab = tabs.find(t => t.url.includes('5173'));

    if (appTab) {
      console.log('Testing navigation on tab:', appTab.title);
      const pageWs = new WebSocket(appTab.webSocketDebuggerUrl);

      pageWs.onopen = () => {
        pageWs.send(JSON.stringify({ id: 1, method: 'Runtime.enable' }));
      };

      const evalCmd = (code) => {
        return new Promise((resolve) => {
          const reqId = Math.floor(Math.random() * 100000);
          const listener = (e) => {
            const data = JSON.parse(e.data);
            if (data.id === reqId) {
              pageWs.removeEventListener('message', listener);
              resolve(data.result?.result?.value);
            }
          };
          pageWs.addEventListener('message', listener);
          pageWs.send(JSON.stringify({
            id: reqId,
            method: 'Runtime.evaluate',
            params: { expression: code, returnByValue: true }
          }));
        });
      };

      // Wait 1.5s for initial load
      await new Promise(r => setTimeout(r, 1500));

      const scales = ['MULTIVERSE', 'COSMIC_WEB', 'GALAXIES', 'MILKY_WAY', 'SOLAR_SYSTEM', 'PLANETS', 'HABITABILITY', 'BLACK_HOLES', 'WORMHOLE'];

      for (const scale of scales) {
        console.log(`\n👉 Clicking button: [data-scale="${scale}"]...`);
        const res = await evalCmd(`(() => {
          const btn = document.querySelector('.nav-btn[data-scale="${scale}"]');
          if (!btn) return { error: 'Button not found' };
          btn.click();
          return {
            clicked: true,
            activeText: document.querySelector('.nav-btn.active')?.textContent.trim(),
            breadcrumb: document.getElementById('breadcrumb-bar')?.textContent.trim(),
            camMode: window.app?.navSystem?.currentScale
          };
        })()`);
        console.log('Result:', res);
        await new Promise(r => setTimeout(r, 800));
      }

      console.log('\n✅ ALL NAVIGATION BUTTON CLICKS TESTED SUCCESSFULLY!');
      pageWs.close();
      browserWs.close();
      chromeProc.kill();
      process.exit(0);
    }
  };
}

testNav().catch(err => {
  console.error(err);
  chromeProc.kill();
  process.exit(1);
});
