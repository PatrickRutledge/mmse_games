const { contextBridge, ipcRenderer } = require('electron');

// Expose storage API to renderer via IPC
contextBridge.exposeInMainWorld('bloomStorage', {
  save: async (data) => {
    const result = await ipcRenderer.invoke('storage-save', data);
    return result.success;
  },
  load: async () => {
    const result = await ipcRenderer.invoke('storage-load');
    return result.success ? result.data : null;
  }
});
