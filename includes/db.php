<?php
require_once __DIR__ . '/portfolio-static.php';

function omg_read_json(string $file): array {
    if (!file_exists($file)) return [];
    return json_decode(file_get_contents($file), true) ?? [];
}

function omg_write_json(string $file, array $data): bool {
    $dir = dirname($file);
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    return (bool) file_put_contents(
        $file,
        json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
}

function omg_generate_project_id(): string {
    return 'proj-' . bin2hex(random_bytes(6));
}

function omg_slugify(string $text): string {
    $text = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $text) ?: $text;
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9\s-]/', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    return trim($text, '-');
}

function omg_unique_project_slug(string $base, ?string $excludeId = null): string {
    $data     = omg_read_json(PORTFOLIO_FILE);
    $uploaded = $data['projects'] ?? [];
    $slugs    = array_column(
        array_filter($uploaded, fn($p) => $p['id'] !== $excludeId),
        'slug'
    );
    // Also avoid colliding with the 28 legacy static entries.
    $slugs = array_merge($slugs, array_column(portfolio_static_all(), 'slug'));

    $slug = $base;
    $i    = 2;
    while (in_array($slug, $slugs)) { $slug = $base . '-' . $i++; }
    return $slug;
}

// ── PORTFOLIO (admin-uploaded) ─────────────────────────────────────────────

function portfolio_all(bool $publishedOnly = true): array {
    $data     = omg_read_json(PORTFOLIO_FILE);
    $projects = $data['projects'] ?? [];
    if ($publishedOnly) {
        $projects = array_values(array_filter($projects, fn($p) => ($p['status'] ?? '') === 'published'));
    }
    usort($projects, fn($a, $b) => strcmp($b['created_at'] ?? '', $a['created_at'] ?? ''));
    return $projects;
}

function project_by_slug(string $slug): ?array {
    foreach (portfolio_all(false) as $p) {
        if (($p['slug'] ?? '') === $slug) return $p;
    }
    return null;
}

function project_by_id(string $id): ?array {
    $data = omg_read_json(PORTFOLIO_FILE);
    foreach (($data['projects'] ?? []) as $p) {
        if (($p['id'] ?? '') === $id) return $p;
    }
    return null;
}

function portfolio_save(array $project): bool {
    $data     = omg_read_json(PORTFOLIO_FILE);
    $projects = $data['projects'] ?? [];
    $found    = false;
    foreach ($projects as &$p) {
        if ($p['id'] === $project['id']) { $p = $project; $found = true; break; }
    }
    unset($p);
    if (!$found) $projects[] = $project;
    $data['projects'] = $projects;
    return omg_write_json(PORTFOLIO_FILE, $data);
}

function portfolio_delete(string $id): bool {
    $data             = omg_read_json(PORTFOLIO_FILE);
    $data['projects'] = array_values(
        array_filter($data['projects'] ?? [], fn($p) => $p['id'] !== $id)
    );
    return omg_write_json(PORTFOLIO_FILE, $data);
}
