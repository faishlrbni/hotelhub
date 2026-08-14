<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AiController extends Controller
{
    public function insights()
    {
        return response()->json(['data' => []]);
    }

    public function forecastOccupancy()
    {
        return response()->json(['data' => []]);
    }

    public function dailyReports()
    {
        return response()->json(['data' => []]);
    }

    public function reportDetail($id)
    {
        return response()->json(['data' => null]);
    }

    public function alerts()
    {
        return response()->json(['data' => []]);
    }

    public function dismissAlert($id)
    {
        return response()->json(['data' => null]);
    }
}
