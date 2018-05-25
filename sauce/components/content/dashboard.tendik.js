import React from 'react'

let dGuru = () => {
    return (
        <div className="panel">
            <div className="panel-heading">
                <h3 className="panel-title">Data Tendik</h3>
            </div>
            <div className="panel-body">
                <div id="demo-dt-addrow_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div id="container">
                        <table id="tendik-table" className="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr id="guru-table-tr">
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Status Kepegawaian</th>
                                    <th>Jenis PTK</th>
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