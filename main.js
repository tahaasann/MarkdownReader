const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { marked } = require('marked');

marked.setOptions({
  gfm: true,
  breaks: true
});

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1050,
    height: 850,
    minWidth: 600,
    minHeight: 500,
    backgroundColor: '#1e1e2e',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false // Preload köprüsünün yerel modüllerle pürüzsüz eşleşmesi için
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('open-file-dialog', async () => {
    // Pencereyi odaklayarak dosya yöneticisini öne çıkartıyoruz
    const { canceled, filePaths } = await dialog.showOpenDialog(win, {
      properties: ['openFile'],
      filters: [{ name: 'Markdown Dosyaları', extensions: ['md', 'markdown', 'txt'] }]
    });

    if (!canceled && filePaths.length > 0) {
      const rawText = fs.readFileSync(filePaths[0], 'utf-8');
      const html = await Promise.resolve(marked.parse(rawText));
      return { html, name: path.basename(filePaths[0]) };
    }
    return null;
  });

  ipcMain.handle('parse-markdown', async (_event, rawText) => {
    return await Promise.resolve(marked.parse(rawText));
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});