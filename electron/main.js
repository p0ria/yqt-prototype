"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require('path');
var url = require('url');
var mainWindow;
function createWindow() {
    var startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: { nodeIntegration: true }
    });
    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
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
