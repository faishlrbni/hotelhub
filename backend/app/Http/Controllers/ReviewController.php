<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function show($id)
    {
        return response()->json(['data' => null]);
    }

    public function respond($id, Request $request)
    {
        return response()->json(['data' => null]);
    }

    public function sentimentSummary()
    {
        return response()->json(['data' => []]);
    }
}
