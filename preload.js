const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('open-file-dialog'),
  parseMarkdown: (text) => ipcRenderer.invoke('parse-markdown', text)
});