//import hook useState from react
import React, { useState } from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';

export default function EditPost({ errors, post }) {

    //define state
    const [keterangan, setKeterangan] = useState(post.keterangan);
    const [deadline, setDeadline] = useState(post.deadline);
    const [status, setStatus] = useState(post.status);

    //function "updatePost"
    const updatePost = async (e) => {
        e.preventDefault();

        Inertia.put(`/posts/${post.id}`, {
            keterangan: keterangan,
            deadline: deadline,
            status: status
        });
    }

    return (
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">EDIT POST</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updatePost}>

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

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Status</label>
                                    <select className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                        <option value="belum" selected = {status == "belum" ? true : false}>Belum</option>
                                        <option value="selesai" selected = {status == "selesai" ? true : false}>Selesai</option>
                                        <option value="berjalan" selected = {status == "berjalan" ? true : false}>Berjalan</option>
                                    </select>
                                </div>
                                {errors.status && (
                                    <div className="alert alert-danger">
                                        {errors.status}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> UPDATE</button>
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