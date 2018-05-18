import React from 'react'

let login = () => {
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
            <div className="cls-content" style={{marginTop: '2rem'}}>
                <div className="cls-content-sm panel">
                    <div className="panel-body">
                        <p className="pad-btm">Sign In to your account</p>
                        <form id="form-login">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-user"></i>
                                    </div>
                                    <input name="username" className="form-control" placeholder="Username" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <i className="fa fa-asterisk"></i>
                                    </div>
                                    <input type="password" name="password" className="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group text-right">
                                        <button id="btn1" className="btn btn-success text-uppercase" type="submit">Login</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="demo-bg">
                <div id="demo-bg-list">
                    <div className="demo-loading">
                        <i className="fa fa-refresh"></i>
                    </div>
                    <img className="demo-chg-bg bg-trans" src="assets/img/bg-img/thumbs/bg-trns.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-1.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-2.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-3.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-4.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-5.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-6.jpg" alt="Background Image" />
                    <img className="demo-chg-bg" src="assets/img/bg-img/thumbs/bg-img-7.jpg" alt="Background Image" />
                </div>
            </div>
        </div>
    )
}

export default login