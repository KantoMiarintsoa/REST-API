<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB; 

Route::get('/', function () {
    try {
        DB::connection()->getPdo();
        return "✅ Connexion réussie à PostgreSQL : " . DB::connection()->getDatabaseName();
    } catch (\Exception $e) {
        return "❌ Erreur de connexion : " . $e->getMessage();
    }
});
