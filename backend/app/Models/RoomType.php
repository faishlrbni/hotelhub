<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'name',
        'capacity',
        'base_rate',
        'amenities',
        'photos',
    ];

    protected $casts = [
        'amenities' => 'array',
        'photos' => 'array',
    ];

    public function rooms()
    {
        return $this->hasMany(Room::class);
    }
}
