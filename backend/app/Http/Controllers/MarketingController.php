<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MarketingController extends Controller
{
    public function promotions()
    {
        return response()->json(['data' => []]);
    }

    public function couponAnalytics($code)
    {
        return response()->json(['data' => null]);
    }

    public function bookingSources()
    {
        return response()->json(['data' => []]);
    }

    public function campaigns()
    {
        return response()->json(['data' => []]);
    }

    public function campaignRoi($id)
    {
        return response()->json(['data' => null]);
    }
}
