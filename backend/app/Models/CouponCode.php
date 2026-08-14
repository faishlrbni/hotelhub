<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CouponCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'campaign_id',
        'code',
        'discount_percentage',
        'discount_flat',
        'usage_count',
    ];
}
