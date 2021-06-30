const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
	});

	mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
	mainWindow.on('close', () => {
		mainWindow = null;
	});
	// mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('activate', () => {
	if (mainWindow === null) createWindow;
});
