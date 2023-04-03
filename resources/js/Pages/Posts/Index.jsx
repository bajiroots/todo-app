//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';

//import Link
import { Link } from '@inertiajs/inertia-react';

//import inertia adapter
import { Inertia } from '@inertiajs/inertia';


export default function PostIndex({ posts, session }) {

    //method deletePost
    const deletePost = async (id) => {
        Inertia.delete(`/posts/${id}`);
    }

    // const updateSudah = async (id) => {
    //     Inertia.put(`/posts/${id}`, {
    //         keterangan: post.keterangan,
    //         deadline: post.deadline,
    //         status: "sudah"
    //     });
    // }

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}>
                
                <Link href="/posts/create" className="btn btn-success btn-md mb-3">Tambah Task</Link>
                
                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}

                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <table id="table" className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {/* <th scope="col">Ubah Status</th> */}
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Deadline</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                            { posts.map((post, index) => (
                                <tr key={ index }>
                                    {/* <td className="text-center">
                                        <button onClick={() => updateSudah(post.id,post.keterangan,post.deadline)} className="btn btn-sm btn-success">Sudah</button>
                                    </td> */}
                                    <td>{ post.keterangan }</td>
                                    <td>{ post.deadline }</td>
                                    <td className={"text-uppercase text-white fw-bold " + (post.status === "belum" ? 'bg-danger' : (post.status === "selesai" ? 'bg-success' : "bg-warning"))} >{ post.status }</td>
                                    <td className="text-center">
                                        <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">EDIT</Link>
                                        <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger">DELETE</button>
                                    </td>
                                </tr>
                            )) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}