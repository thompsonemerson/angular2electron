const { app, BrowserWindow }  = require('electron')

require('electron-reload')(__dirname)

// windows
let mainWindow
let initialWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// ready
app.on('ready', () => initialWindow())

// activate
app.on('activate', () => {
  if (mainWindow === null) {
    initialWindow()
  }
})

// close all windows
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
