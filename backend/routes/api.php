<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\GuestController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\HousekeepingController;
use App\Http\Controllers\RevenueController;
use App\Http\Controllers\MarketingController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\AiController;
use App\Http\Controllers\SettingsController;

/*
|--------------------------------------------------------------------------
| API Routes — HotelHub v1 (PRD §15.2)
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {

    // Auth Routes
    Route::post('/login', function () { return response()->json(['message' => 'Unimplemented']); });
    Route::post('/logout', function () { return response()->json(['message' => 'Unimplemented']); });
    Route::get('/me', function () { return response()->json(['data' => null]); });

    // Dashboard
    Route::get('/dashboard/kpis', [DashboardController::class, 'kpis']);
    Route::get('/dashboard/booking-trend', [DashboardController::class, 'bookingTrend']);
    Route::get('/dashboard/revenue-trend', [DashboardController::class, 'revenueTrend']);
    Route::get('/dashboard/room-status', [DashboardController::class, 'roomStatus']);
    Route::get('/dashboard/revenue-sources', [DashboardController::class, 'revenueSources']);
    Route::get('/dashboard/occupancy-heatmap', [DashboardController::class, 'occupancyHeatmap']);

    // Reservations
    Route::get('/reservations', [ReservationController::class, 'index']);
    Route::get('/reservations/{id}', [ReservationController::class, 'show']);
    Route::post('/reservations', [ReservationController::class, 'store']);
    Route::post('/reservations/{id}/check-in', [ReservationController::class, 'checkIn']);
    Route::post('/reservations/{id}/check-out', [ReservationController::class, 'checkOut']);
    Route::post('/reservations/bulk', [ReservationController::class, 'bulk']);

    // Guests
    Route::get('/guests', [GuestController::class, 'index']);
    Route::get('/guests/{id}', [GuestController::class, 'show']);
    Route::get('/guests/{id}/bookings', [GuestController::class, 'bookings']);
    Route::get('/guests/{id}/spending', [GuestController::class, 'spending']);
    Route::post('/guests/{id}/notes', [GuestController::class, 'notes']);

    // Rooms
    Route::get('/rooms', [RoomController::class, 'index']);
    Route::get('/room-types', [RoomController::class, 'types']);
    Route::patch('/rooms/{id}/status', [RoomController::class, 'updateStatus']);
    Route::post('/rooms/{id}/maintenance', [RoomController::class, 'createMaintenanceTicket']);

    // Housekeeping
    Route::get('/housekeeping/queue', [HousekeepingController::class, 'queue']);
    Route::post('/housekeeping/tasks/{id}/assign', [HousekeepingController::class, 'assignTask']);
    Route::patch('/housekeeping/tasks/{id}/progress', [HousekeepingController::class, 'updateProgress']);
    Route::post('/housekeeping/tasks/{id}/inspect', [HousekeepingController::class, 'inspectTask']);

    // Revenue
    Route::get('/revenue/metrics', [RevenueController::class, 'metrics']);
    Route::get('/revenue/forecast', [RevenueController::class, 'forecast']);
    Route::get('/revenue/pricing-suggestions', [RevenueController::class, 'pricingSuggestions']);
    Route::post('/revenue/pricing-suggestions/{id}/accept', [RevenueController::class, 'acceptSuggestion']);
    Route::post('/revenue/pricing-suggestions/bulk-accept', [RevenueController::class, 'bulkAccept']);

    // Marketing
    Route::get('/promotions', [MarketingController::class, 'promotions']);
    Route::get('/coupons/{code}/analytics', [MarketingController::class, 'couponAnalytics']);
    Route::get('/marketing/booking-sources', [MarketingController::class, 'bookingSources']);
    Route::get('/campaigns', [MarketingController::class, 'campaigns']);
    Route::get('/campaigns/{id}/roi', [MarketingController::class, 'campaignRoi']);

    // Reviews
    Route::get('/reviews', [ReviewController::class, 'index']);
    Route::get('/reviews/{id}', [ReviewController::class, 'show']);
    Route::post('/reviews/{id}/respond', [ReviewController::class, 'respond']);
    Route::get('/reviews/sentiment-summary', [ReviewController::class, 'sentimentSummary']);

    // Analytics
    Route::get('/analytics/revenue', [AnalyticsController::class, 'revenue']);
    Route::get('/analytics/bookings', [AnalyticsController::class, 'bookings']);
    Route::get('/analytics/demographics', [AnalyticsController::class, 'demographics']);
    Route::get('/analytics/countries', [AnalyticsController::class, 'countries']);
    Route::get('/analytics/cancellations', [AnalyticsController::class, 'cancellations']);
    Route::get('/analytics/seasonality', [AnalyticsController::class, 'seasonality']);

    // AI Center
    Route::get('/ai/insights', [AiController::class, 'insights']);
    Route::get('/ai/forecast/occupancy', [AiController::class, 'forecastOccupancy']);
    Route::get('/ai/reports/daily', [AiController::class, 'dailyReports']);
    Route::get('/ai/reports/{id}', [AiController::class, 'reportDetail']);
    Route::get('/ai/alerts', [AiController::class, 'alerts']);
    Route::post('/ai/alerts/{id}/dismiss', [AiController::class, 'dismissAlert']);

    // Settings
    Route::get('/settings/property', [SettingsController::class, 'propertyProfile']);
    Route::get('/settings/users', [SettingsController::class, 'users']);
    Route::get('/settings/integrations', [SettingsController::class, 'integrations']);
});
