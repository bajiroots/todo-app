//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function CreatePost({ errors }) {

    //define state
    const [keterangan, setKeterangan] = useState('');
    const [deadline, setDeadline] = useState('');
    const [status, setStatus] = useState('');

    //function "storePost"
    const storePost = async (e) => {
        e.preventDefault();
        
        Inertia.post('/posts', {
            keterangan: keterangan,
            deadline: deadline,
            status: 'belum'
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">TAMBAH POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={storePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Keterangan</label>
                                    <input type="text" className="form-control" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} placeholder="Masukkan Keterangan" />
                                </div>
                                {errors.keterangan && (
                                    <div className="alert alert-danger">
                                        {errors.keterangan}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Deadline</label>
                                    <input type="date" className="form-control" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="Masukkan Dealine" />
                                </div>
                                {errors.deadline && (
                                    <div className="alert alert-danger">
                                        {errors.deadline}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> SAVE</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> RESET</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}