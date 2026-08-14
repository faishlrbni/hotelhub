<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'name',
        'spend',
        'start_date',
        'end_date',
        'coupon_code',
    ];
}
