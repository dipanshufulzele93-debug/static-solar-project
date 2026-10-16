import { spawn } from 'child_process';
import fs from 'fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\ASUS\\AppData\\Local\\Temp\\chrome-screenshot-profile';

const chromeProc = spawn(chromePath, [
  '--remote-debugging-port=9222',
  `--user-data-dir=${userDataDir}`,
  '--headless=new',
  '--window-size=1280,720',
  '--no-sandbox',
  'http://localhost:5173'
]);

async function capture() {
  await new Promise(r => setTimeout(r, 2000));
  
  const versionRes = await fetch('http://127.0.0.1:9222/json/version');
  const version = await versionRes.json();

  const browserWs = new WebSocket(version.webSocketDebuggerUrl);
  browserWs.onopen = async () => {
    const listRes = await fetch('http://127.0.0.1:9222/json');
    const tabs = await listRes.json();
    const appTab = tabs.find(t => t.url.includes('5173'));

    if (appTab) {
      console.log('Target tab found:', appTab.title);
      const pageWs = new WebSocket(appTab.webSocketDebuggerUrl);

      pageWs.onopen = () => {
        pageWs.send(JSON.stringify({ id: 1, method: 'Page.enable' }));
      };

      pageWs.onmessage = (e) => {
        const msg = JSON.parse(e.data);
        if (msg.id === 10) {
          const buffer = Buffer.from(msg.result.data, 'base64');
          fs.writeFileSync('c:\\Users\\ASUS\\Downloads\\solar\\current_app_screenshot.png', buffer);
          console.log('✅ Screenshot captured successfully: current_app_screenshot.png (', buffer.length, 'bytes )');
          pageWs.close();
          browserWs.close();
          chromeProc.kill();
          process.exit(0);
        }
      };

      // Wait 3 seconds for 3D animation loop and scene rendering
      setTimeout(() => {
        pageWs.send(JSON.stringify({
          id: 10,
          method: 'Page.captureScreenshot',
          params: { format: 'png' }
        }));
      }, 3000);
    }
  };
}

capture().catch(err => {
  console.error(err);
  chromeProc.kill();
  process.exit(1);
});
