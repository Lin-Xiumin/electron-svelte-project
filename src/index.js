const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 900,
		height: 680,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false, //resolve with https://github.com/electron/electron/issues/9920#issuecomment-797491175
		},
	});
	mainWindow.on('close', () => {
		mainWindow = null;
	});
	mainWindow.webContents.openDevTools();

	mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('activate', () => {
	if (mainWindow === null) createWindow;
});

app.on('window-all-closed', () => {
	app.quit();
});

//Setup Message Listeners
ipcMain.on('openMySurvey', (e, path) => {
	if (path) {
		spawn(path, { shell: true }).on('error', (err) => {
			dialog.showMessageBox(null, {
				title: 'Warning',
				message: `${path} is not valid : ${err}`,
			});
		});
	} else
		dialog.showMessageBox(null, { title: 'Warning', message: 'Is EMPTY' });
});
