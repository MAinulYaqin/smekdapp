import React from 'react'
import Form from './login.form'

const seed = [1,2,3,4,5,7,8]

let images = (p) => <img className="demo-chg-bg" key={p} src={`assets/img/bg-img/thumbs/bg-img-${p}.jpg`} />
let Login = () => {
    return (
        <div id="container" className="cls-container">
            <div id="bg-overlay" className="bg-img img-balloon"></div>
            <div className="cls-header cls-header-lg">
                <div className="cls-brand">
                    <div className="box-inline" style={{cursor: 'default'}}>
                        <span className="brand-title">Smekda Pro
                            <span className="text-thin">Admin</span>
                        </span>
                    </div>
                </div>
            </div>
            <Form />
            <div className="demo-bg">
                <div id="demo-bg-list">
                    <div className="demo-loading"><i className="fa fa-refresh"></i></div>
                    {seed.map(e => images(e))}
                </div>
            </div>
        </div>
    )
}

export default Login