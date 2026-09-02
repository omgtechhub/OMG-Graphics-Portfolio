<?php
// Load environment credentials if available
$envFile = dirname(__DIR__) . '/env/credentials.php';
$credentials = file_exists($envFile) ? require $envFile : [];

// ── Admin Credentials ─────────────────────────────────────
define('ADMIN_USER',        $credentials['ADMIN_USER']      ?? getenv('ADMIN_USER')      ?: '@OMGGraphicsAdmin');
define('ADMIN_PASS_HASH',   $credentials['ADMIN_PASS_HASH'] ?? getenv('ADMIN_PASS_HASH') ?: '$2y$10$ge73eBWS9cTwTgyAUbHmTOdJc8AxUWkSlKe7n4Z9zFRdAfG2YeF82');
define('ADMIN_SESSION_KEY', 'omg_graphics_admin_auth_v1');

// ── Site ──────────────────────────────────────────────────
define('SITE_NAME',  'OMG Graphics');
define('SITE_URL',   'https://omggraphics.great-site.net');

// ── File Paths ────────────────────────────────────────────
define('DATA_DIR',       dirname(__DIR__) . '/data/');
define('PORTFOLIO_FILE', DATA_DIR . 'portfolio.json');

// ── Upload Paths ──────────────────────────────────────────
define('PORTFOLIO_UPLOAD_DIR', dirname(__DIR__) . '/uploads/portfolio/');
define('PORTFOLIO_UPLOAD_URL', 'uploads/portfolio/');

// ── Portfolio Categories ──────────────────────────────────
// Internal value => display label. Internal values match the existing
// data-filter values already used by js/omg.js's filter buttons.
define('PORTFOLIO_CATEGORIES', [
    'brand'    => 'Brand Identity',
    'poster'   => 'Posters & Flyers',
    'social'   => 'Social Media',
    'birthday' => 'Birthday',
]);

// ── Session ───────────────────────────────────────────────
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', 1);
    ini_set('session.use_strict_mode', 1);
    session_start();
}
