<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RateEntry extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_type_id',
        'date',
        'rate',
        'ai_suggested_rate',
        'suggestion_status',
    ];
}
