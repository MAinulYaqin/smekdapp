import React from 'react'

let Form = () => {
    return (
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
    )
}

export default Form