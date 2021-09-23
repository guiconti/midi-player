// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu, MenuItem } from 'electron';

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      // preload: path.join(__dirname, 'preload.js')
    },
  });
  mainWindow.removeMenu();
  mainWindow.loadURL('http://localhost:3000/');

  // mainWindow.webContents.on(
  //   'select-bluetooth-device',
  //   (event, deviceList, callback) => {
  //     event.preventDefault();
  //     console.log(deviceList);
  //     // const result = deviceList.find((device) => {
  //     //   return device.deviceName === 'test'
  //     // })
  //     // if (!result) {
  //     //   callback('')
  //     // } else {
  //     //   callback(result.deviceId)
  //     // }
  //   },
  // );

  const menu = new Menu();
  menu.append(
    new MenuItem({
      label: 'Electron',
      submenu: [
        {
          role: 'help',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
          click: () => {
            mainWindow.webContents.toggleDevTools();
          },
        },
        {
          role: 'reload',
          accelerator:
            process.platform === 'darwin' ? 'Alt+Cmd+R' : 'Alt+Shift+R',
          click: () => {
            app.relaunch();
          },
        },
      ],
    }),
  );

  Menu.setApplicationMenu(menu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
