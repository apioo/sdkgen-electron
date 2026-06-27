const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('fusio', {
    selectDirectory: () => ipcRenderer.invoke('dialog:select-directory'),
    writeModels: (outputDir, files) => ipcRenderer.invoke('file:write-models', { outputDir, files })
});
