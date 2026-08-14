<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HousekeepingController extends Controller
{
    public function queue(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function assignTask($id, Request $request)
    {
        return response()->json(['data' => null]);
    }

    public function updateProgress($id, Request $request)
    {
        return response()->json(['data' => null]);
    }

    public function inspectTask($id, Request $request)
    {
        return response()->json(['data' => null]);
    }
}
