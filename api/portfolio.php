<?php
ob_start();
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Cache-Control: no-cache, must-revalidate');

require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';

$projects = portfolio_all(true); // published only, admin-uploaded

$out = array_map(function($p) {
    return [
        'id'         => $p['id']         ?? '',
        'slug'       => $p['slug']       ?? '',
        'title'      => $p['title']      ?? '',
        'category'   => $p['category']   ?? '',
        'type'       => $p['type']       ?? '',
        'image'      => $p['image']      ?? '',
        'client'     => $p['client']     ?? '',
        'year'       => $p['year']       ?? null,
        'brief'      => $p['brief']      ?? '',
        'problem'    => $p['problem']    ?? '',
        'challenges' => $p['challenges'] ?? '',
        'solution'   => $p['solution']   ?? '',
        'outcome'    => $p['outcome']    ?? '',
        'created_at' => $p['created_at'] ?? '',
    ];
}, $projects);

$json = json_encode(['ok' => true, 'projects' => $out], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
ob_end_clean();
echo $json;
