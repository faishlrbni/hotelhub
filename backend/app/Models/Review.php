<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'platform',
        'rating',
        'text',
        'sentiment',
        'themes',
        'response_text',
        'responded_at',
    ];

    protected $casts = [
        'themes' => 'array',
    ];
}
