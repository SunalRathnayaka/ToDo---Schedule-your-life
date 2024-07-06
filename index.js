const { app, BrowserWindow } = require('electron')
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true, 
    title: "ToDO: Scheduler",
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
    }
  })
  // remoteMain.enable(win.webContents)
  win.loadFile('index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
})
