const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;
function createWindow () {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600, 
        fullscreen: true, 
        autoHideMenuBar: true, 
        webPreferences: {nodeIntegration: true}});
    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

// var net = require('net');

// console.log("creating connection...");
// var client = new net.Socket();
// client.connect(8001, '127.0.0.1', function() {
//     console.log('Connected');
//     client.write('Hello, server! Love, Client.');
// });

// client.on('data', function(data) {
//     console.log('Received: ' + data);
// });

// client.on('close', function() {
//     console.log('Connection closed');
// });
