<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function show($id)
    {
        return response()->json(['data' => null]);
    }

    public function store(Request $request)
    {
        return response()->json(['data' => null], 201);
    }

    public function checkIn($id)
    {
        return response()->json(['data' => null]);
    }

    public function checkOut($id)
    {
        return response()->json(['data' => null]);
    }

    public function bulk(Request $request)
    {
        return response()->json(['data' => []]);
    }
}
