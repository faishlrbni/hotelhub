<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function kpis(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function bookingTrend(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function revenueTrend(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function roomStatus(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function revenueSources(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function occupancyHeatmap(Request $request)
    {
        return response()->json(['data' => []]);
    }
}
