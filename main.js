// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const Store = require('./store.js');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

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


function setDimensions(){
    let { width, height } = mainWindow.getBounds();
    // Now that we have them, save them using the `set` method.
    store.set('windowBounds', { width, height });
}

function createWindow () {
  let windowBounds = store.get('windowBounds');
  let isFullScreen = store.get('fullScreen');

  // FullScreen
  // console.log(isFullScreen);

  // Create the browser window.
  mainWindow = new BrowserWindow({width: windowBounds['width'], height: windowBounds['height'], fullScreen: isFullScreen})

  if(isFullScreen){
    mainWindow.maximize();
  }
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()


  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })

  console.log(mainWindow);

  // Window is maximised
  mainWindow.on('maximize', function (e) {
    let { width, height } = mainWindow.getBounds();
    store.set('fullScreen', true);
    // console.log('maximize');
  })


  mainWindow.on('unmaximize', function (e) {
    let { width, height } = mainWindow.getBounds();
    store.set('fullScreen', false);
    // console.log('minimize');
  })


  // Restore window from minimized state
  // mainWindow.on('restore', function (e) {console.log('Minimise');})
  // mainWindow.on('minimize', function (e) {// console.log('minimize');})

  // The BrowserWindow class extends the node.js core EventEmitter class, so we use that API
  // to listen to events on the BrowserWindow. The resize event is emitted when the window size changes.
  mainWindow.on('resize', () => {
    // console.log('Resize');
    // The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
    // the height, width, and x and y coordinates.
    let { width, height } = mainWindow.getBounds();
    // Now that we have them, save them using the `set` method.
    store.set('windowBounds', { width, height });
    // console.log(width, height);
  });


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.