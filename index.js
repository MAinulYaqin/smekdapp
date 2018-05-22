// @ts-check

let {app, ipcMain, BrowserWindow, Menu} = require('electron')
let {join} = require('path')
let {format} = require('url')
let config = require('./config/config')

function showWindow (a,b) {
    a = new BrowserWindow({width: 1250 ,height: 666})
    let d = join(__dirname, `${b}`)
    a.loadURL(format({
        pathname: d,
        protocol: 'file',
        slashes: true
    }))
    a.on('close', () => {
        a = null
    })
    a.show()
}

let win
let mainMenuTemplate = [{
    label: 'App',
    submenu: [{
        label: 'Exit',
        click() {
            app.quit();
        }
    }]
}, {
    label: 'Guru',
    submenu: [{
        label: 'Tambahkan Guru',
    }]
}, {
    label: 'Siswa',
    submenu: [{
        label: 'Tambahkan Siswa',
    }]
}, {
    label: 'Tendik',
    submenu: [{
        label: 'Tambahkan Tendik',
    }]
}, {
    // Check if the platform is mac (darwin) or something else
    accelerator: config.close_app,
    click() {
        app.quit();
    }
}]

if (process.platform === 'darwin') {
    mainMenuTemplate.unshift
}

// configuration for development environment
if (config.node_env == 'development') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [{
            label: 'Toggle Developer Tools',
            accelerator: config.toggle_devTools,
            click(item, focusedWindow) {
                focusedWindow.toggleDevTools();
            }
        }, {
            label: 'Tambah akun',
            click() {}
        }, {
            label: 'Reload',
            role: 'reload'
        }]
    })
}

app.on('ready', () => {
    showWindow(win, 'index.html')
    let m = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(m)
})
