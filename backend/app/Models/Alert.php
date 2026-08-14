<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'severity',
        'category',
        'message',
        'entity_type',
        'entity_id',
        'dismissed_at',
    ];
}
