'use strict'

import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import { format as formatUrl } from 'url'
import App from './App';

let zap = new App();

const isDevelopment = process.env.NODE_ENV !== 'production'
const Store = require('./store.js');

console.log(isDevelopment);

// First instantiate the class
const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    // 800x600 is the default size of our window
    windowBounds: { width: 800, height: 600 },
    fullScreen: false
  }
});


// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {

  let windowBounds = store.get('windowBounds');
  let isFullScreen = store.get('fullScreen');

  const window = new BrowserWindow({
    width: windowBounds['width'], 
    height: windowBounds['height'], 
    fullScreen: isFullScreen
  });


// console.log('Is fullscreenz:',isFullScreen);

  if(isFullScreen){
    window.maximize();
  }

  // Window is maximised
  window.on('maximize', function (e) {
    let { width, height } = window.getBounds();
    store.set('fullScreen', true);
    // console.log('maximize');
  })


  window.on('unmaximize', function (e) {
    let { width, height } = window.getBounds();
    store.set('fullScreen', false);
    // console.log('unmaximize')
  })


  // Restore window from minimized state
  // window.on('restore', function (e) {console.log('Minimise');})
  // window.on('minimize', function (e) {// console.log('minimize');})

  // The BrowserWindow class extends the node.js core EventEmitter class, so we use that API
  // to listen to events on the BrowserWindow. The resize event is emitted when the window size changes.
  window.on('resize', () => {
    let { width, height } = window.getBounds();
    store.set('windowBounds', { width, height });
    // console.log("Resize: ",width, height);
  });




  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})
