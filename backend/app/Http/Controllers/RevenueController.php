<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RevenueController extends Controller
{
    public function metrics(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function forecast(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function pricingSuggestions(Request $request)
    {
        return response()->json(['data' => []]);
    }

    public function acceptSuggestion($id)
    {
        return response()->json(['data' => null]);
    }

    public function bulkAccept(Request $request)
    {
        return response()->json(['data' => []]);
    }
}
