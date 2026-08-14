<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function types()
    {
        return response()->json(['data' => []]);
    }

    public function updateStatus($id, Request $request)
    {
        return response()->json(['data' => null]);
    }

    public function createMaintenanceTicket($id, Request $request)
    {
        return response()->json(['data' => null]);
    }
}
