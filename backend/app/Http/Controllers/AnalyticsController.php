<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function revenue(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function bookings(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function demographics()
    {
        return response()->json(['data' => []]);
    }

    public function countries()
    {
        return response()->json(['data' => []]);
    }

    public function cancellations()
    {
        return response()->json(['data' => []]);
    }

    public function seasonality()
    {
        return response()->json(['data' => []]);
    }
}
