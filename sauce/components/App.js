import React from 'react'
import ReactDOM from 'react-dom'
import md5 from 'md5'
import config from '../../config/config'
// Components
import Login from './login/login'
import Dashboard from './dashboard/dashboard'
import Header from './dashboard/header'
import Footer from './dashboard/footer'

export default class App extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            login: true
        }
    }

    async Mysql() {
        let mysql = window.require('mysql')
        let conn = mysql.createConnection(config.mysql_config)
        conn.connect()

        return conn
    }

    async FormHandle(e) {
        let a = await document.getElementById(e).elements
        let d = {}

        for (let i of a) {
            switch (i.type) {
                case 'button':
                    break;
                case 'submit':
                    break;
                case 'password':
                    d[i.name] = md5(i.value)
                    break;
                default:
                    d[i.name] = i.value
                    break;
            }
        }
        return d
    }

    async dataLogin(d) {
        this.Mysql()
            .then(e => {
                let f = `SELECT id, username FROM akun_guru WHERE username=${JSON.stringify(d.username)} and password=${JSON.stringify(d.password)}`
                e.query(f, (err, result) => {
                    if (err) throw Error;
                    else this.setState({login: false})
                })
            })
    }

    Login(e) {
        this.FormHandle(e).then(f => {
            this.dataLogin(f)
        })
    }

    PagesHandle() {
        if (this.state.login) {
            return <Login s={(e) => this.Login(e)}/>
        } else {
            return <Dashboard/>
        }
    }

    render() {
        return (
            ReactDOM.createPortal(this.PagesHandle(), document.querySelector('body'))
        )
    }
}