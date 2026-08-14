<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function show($id)
    {
        return response()->json(['data' => null]);
    }

    public function bookings($id)
    {
        return response()->json(['data' => []]);
    }

    public function spending($id)
    {
        return response()->json(['data' => []]);
    }

    public function notes($id, Request $request)
    {
        return response()->json(['data' => null]);
    }
}
