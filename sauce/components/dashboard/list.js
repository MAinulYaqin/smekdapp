import React from 'react'

let seed = [
    {id: 1, data: 'Guru', list: ['Dashboard', 'Tambahkan Guru']},
    {id: 2, data: 'Tendik', list: ['Dashboard', 'Tambahkan Tendik']},
    {id: 3, data: 'Siswa', list: ['Dashboard', 'Tambahkan Siswa']}
]

let List = ({b, p}) => {
    return (
        <ul id="mainnav-menu" className="list-group">
            {/* Category name */}
            <li className="list-header">Navigation</li>
            
            <li className="active-link">
                <a onClick={() => {
                        p(0)
                    }} href="#">
                    <i className="psi-home"></i>
                    <span className="menu-title">
                        <strong>Dashboard</strong>
                    </span>
                </a>
            </li>
            {
                seed.map(e => {
                    return (
                        <li key={e.id}>
                            <a href="index.html#">
                                <i className="fa fa-mortar-board"></i>
                                <span className="menu-title">
                                    <strong>{e.data}</strong>
                                </span>
                                <i className="arrow"></i>
                            </a>

                            {/* Submenu */}
                            <ul data={e.data} className="collapse in">
                                <li onClick={() => {
                                    p(e.id)
                                    console.log(e.id)
                                }}>
                                    <a href="#">{e.list[0]}</a>
                                </li>
                                <li>
                                    <a className={`tambah ${e.list[1].toLowerCase()}`}>{e.list[1]}</a>
                                </li>
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default List