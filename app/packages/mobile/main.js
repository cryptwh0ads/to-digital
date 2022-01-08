const { app, BrowserWindow, ipcMain, globalShortcut } = require("electron")
const path = require("path")
const { ElectronChromeExtensions } = require("electron-chrome-extensions")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  const extensions = new ElectronChromeExtensions()
  win = new BrowserWindow({
    width: 300,
    height: 620,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      enableBlinkFeatures:
        "RTCInsertableStreams,WebAssemblySimd,WebAssemblyCSP",
      enableRemoteModule: true,
      contextIsolation: false,
      nativeWindowOpen: true,
      nodeIntegration: true,
      webSecurity: false,
    },
    resizable: false,
  })

  extensions.addTab(win.webContents, win)

  let webContents = win.webContents
  webContents.on("did-finish-load", () => {
    webContents.setZoomFactor(1)
    webContents.setVisualZoomLevelLimits(1, 1)
  })

  win
    .loadURL(`file://${__dirname}/out/index.html`)
    .then((r) => console.log("App is running"))
    .catch((err) => console.log(err))

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  win.on("show", () => {
    appIcon.setHighlightMode("always")
  })
  win.on("hide", () => {
    appIcon.popUpContextMenu()
  })
}

app.on(
  "certificate-error",
  (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault()
    callback(true)
  }
)

ipcMain.on("minimize", () => {
  win.setAlwaysOnTop(false)
  win.isMinimized() ? win.restore() : win.minimize()
  // or depending you could do: win.hide()
})

ipcMain.on("ringing", () => {
  win.isMinimized() ? win.restore() : null
  win.setAlwaysOnTop(true, "floating")
  win.setAlwaysOnTop(false)
})

ipcMain.on("show-to-top", () => {
  win.show()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow)

app.on("ready", () => {
  // globalShortcut.register("Control+Shift+I", () => {
  //   return false
  // })
  globalShortcut.register("Control+R", () => {
    return false
  })
  globalShortcut.register("Control+U", () => {
    return false
  })
  globalShortcut.register("Control+-", () => {
    return false
  })
  globalShortcut.register("Command+R", () => {
    return false
  })
  globalShortcut.register("Command+Option+I", () => {
    return false
  })
  globalShortcut.register("Command+Shift+R", () => {
    return false
  })
})

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
