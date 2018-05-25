import React from 'react'

let clicker = async () => {
    let a = await document.getElementsByTagName('a')

    for (let i of a) {
        console.log(i)
    }
}

clicker()

let Header = ({c}) => {
    return(
        <header id="navbar">
			<div id="navbar-container" className="boxed">
				{/* Brand logo & name */}
				<div className="navbar-header">
					<a href="#" className="navbar-brand">
						<img src="assets/icons/electron.png" alt="Smekda Pro Logo" className="brand-icon" />
						<div className="brand-title">
							<span className="brand-text">Smekda Pro</span>
						</div>
					</a>
				</div>
				{/* End brand logo & name */}

				{/* Navbar Dropdown */}
				<div className="navbar-content clearfix">
					<ul className="nav navbar-top-links pull-left">
						{/* Navigation toogle button */}
						<li className="tgl-menu-btn">
							<a className="mainnav-toggle" onClick={() => { c() }} id="trigger-sidebar" href="index.html#">
								<i className="pli-view-list"></i>
							</a>
						</li>
					</ul>

					<ul className="nav navbar-top-links pull-right">
                        {/* User dropdown */}
						<li id="dropdown-user" className="dropdown" style={{visibility: 'visible !important'}}>
							<a href="layouts-aside-left-side.html#" data-toggle="dropdown" className="dropdown-toggle text-right">
								<span className="pull-right">
									<img className="img-circle img-user media-object" src="assets/img/av1.png" alt="Profile Picture" />
								</span>
								<div className="username hidden-xs" id="username-profile"></div>
							</a>


							<div className="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">

								{/* User dropdown menu */}
								<ul className="head-list">
									<li>
										<a>
											<i className="pli-male icon-lg icon-fw"></i> Profile
										</a>
									</li>
								</ul>

								{/* Dropdown footer */}
								<div className="pad-all text-right">
									<button className="btn btn-primary" id="logout-btn">
										<i className="pli-unlock"></i> Logout
									</button>
								</div>
							</div>
						</li>
                        {/* End user dropdown */}
					</ul>
				</div>
				{/* End Navbar Dropdown */}
			</div>
		</header>
    )
}

export default Header