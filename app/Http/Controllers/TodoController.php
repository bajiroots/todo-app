<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    public function index()
    {
        //get all posts
        $posts = Todo::latest()->get();

        //return view
        return inertia('Posts/Index', [
            'posts' => $posts
        ]);
    }

    public function create()
    {
        return inertia('Posts/Create');
    }

    public function store(Request $request)
    {
        //set validation
        $request->validate([
            'keterangan'   => 'required',
            'deadline' => 'required',
            'status' => 'required',
        ]);

        //create post
        Todo::create([
            'keterangan'     => $request->keterangan,
            'deadline'   => $request->deadline,
            'status'   => $request->status
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Disimpan!');
    }

    public function edit(Todo $post)
    {
        return inertia('Posts/Edit', [
            'post' => $post,
        ]);
    }

    public function update(Request $request, Todo $post)
    {
        //set validation
        $request->validate([
            'keterangan'   => 'required',
            'deadline' => 'required',
            'status' => 'required',
        ]);

        //update post
        $post->update([
            'keterangan'     => $request->keterangan,
            'deadline'   => $request->deadline,
            'status'   => $request->status
        ]);

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Diupdate!');
    }

    public function destroy(Todo $post)
    {
        //delete post
        $post->delete();

        //redirect
        return redirect()->route('posts.index')->with('success', 'Data Berhasil Dihapus!');
    }
}
