import React from 'react'

let dGuru = () => {
    return (
        <div className="panel">
            <div className="panel-heading">
                <h3 className="panel-title">Data Siswa</h3>
            </div>
            <div className="panel-body">
                <div id="demo-dt-addrow_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div id="container">
                        <table id="siswa-table" className="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr id="guru-table-tr">
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Agama</th>
                                    <th>NISN</th>
                                    <th>Rombel</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dGuru