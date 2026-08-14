<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function propertyProfile()
    {
        return response()->json(['data' => null]);
    }

    public function users()
    {
        return response()->json(['data' => []]);
    }

    public function integrations()
    {
        return response()->json(['data' => []]);
    }
}
