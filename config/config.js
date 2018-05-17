// @ts-check
let env = process.env
let platform = env.platfrom

module.exports = {
    node_env: 'development' || env.NODE_ENV,
    close_app: platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
    toggle_devTools: platform == 'darwin' ? 'Command+Shift+I' : 'Ctrl+Shift+I',
    mysql_config: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'sistem_sekolah'
    }
}