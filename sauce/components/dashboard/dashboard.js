import React from 'react'
import Header from './header'
import List from './list'
import Footer from './footer'

import Ddefault from '../content/dashboard'
import Dguru from '../content/dashboard.guru'
import Dtendik from '../content/dashboard.tendik'
import Dsiswa from '../content/dashboard.siswa'

class Dashboard extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            a: true,
            aClass: '',
            bClass: 'collapse',
            pages: 0
        }
    }

    change() {
        if (this.state.a) this.setState({a: false})
        else this.setState({a: true})
    }

    contentHandler() {
        switch (this.state.pages) {
            case 0:
                return <Ddefault />
                break;
        
            case 1:
                return <Dguru />
                break;
            case 2:
                return <Dtendik />
                break;
            case 3:
                return <Dsiswa />
                break;
        }
    }

    render() {
        return (
            <div id="container" className={this.state.a === true ? 'effect mainnav-lg' : 'effect mainnav-sm'}>
                <Header c={() => {
                    this.change()
                }} />
                <div className="boxed">
                    {/* CONTENT CONTAINER */}
                    <div id="content-container">
    
                        {/* Page Title */}
                        <div id="page-title">
                            <h1 className="page-header text-overflow"> Dashboard </h1>
                        </div>
                        {/* End page title */}
    
                        {/* Page content */}
                        <div id="page-content">
                            {this.contentHandler()}
                        </div>
                        {/* End page content */}
    
                    </div>
                    {/* END CONTENT CONTAINER */}
                    
                    {/* MAIN NAVIGATION */}
                    <nav id="mainnav-container">
                        <div id="mainnav">
                            {/* Menu */}
                            <div id="mainnav-menu-wrap">
                                <div className="nano">
                                    <div className="nano-content">
                                        <List b={(e) => {this.sidebarList(e)}} p={(e) => {this.setState({pages: e})}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END MAINNAV */}
                    </nav>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Dashboard