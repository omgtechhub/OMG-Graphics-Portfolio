<?php
require_once __DIR__ . '/includes/config.php';
require_once __DIR__ . '/includes/db.php';

$slug = trim($_GET['slug'] ?? '');

// Look up in the 28 static (hand-authored) pieces first, then in whatever
// has been uploaded through admin/upload_portfolio.php.
$project = null;
$isStatic = false;
foreach (portfolio_static_all() as $p) {
    if ($p['slug'] === $slug) { $project = $p; $isStatic = true; break; }
}
if (!$project) {
    $uploaded = project_by_slug($slug);
    if ($uploaded && ($uploaded['status'] ?? '') === 'published') $project = $uploaded;
}
if (!$project) {
    header('Location: /404.php');
    exit;
}

$categoryLabel = PORTFOLIO_CATEGORIES[$project['category']] ?? ucfirst($project['category']);

// Related projects: same category, excluding this one, from the combined pool.
$pool = array_merge(portfolio_static_all(), portfolio_all(true));
$related = array_values(array_filter($pool, fn($p) => $p['category'] === $project['category'] && $p['slug'] !== $slug));
// De-dupe by slug (a static piece can't collide with an upload, but be safe).
$seen = [];
$related = array_values(array_filter($related, function($p) use (&$seen) {
    if (isset($seen[$p['slug']])) return false;
    $seen[$p['slug']] = true;
    return true;
}));
$related = array_slice($related, 0, 3);

$pageTitle = htmlspecialchars($project['title']) . ' — OMG Graphics';
$pageDesc  = htmlspecialchars(mb_strimwidth($project['brief'] ?? $project['title'], 0, 160, '…'));
?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo $pageTitle; ?></title>
  <?php $assetVer = @filemtime(__DIR__ . '/css/omg.css') ?: time(); $assetVerJs = @filemtime(__DIR__ . '/js/omg.js') ?: time(); ?>
  <link rel="stylesheet" href="css/omg.css?v=<?php echo $assetVer; ?>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
  <link rel="manifest" href="site.webmanifest">
  <link rel="shortcut icon" href="favicon.ico">

  <meta name="description" content="<?php echo $pageDesc; ?>">
  <meta property="og:title" content="<?php echo $pageTitle; ?>">
  <meta property="og:description" content="<?php echo $pageDesc; ?>">
  <meta property="og:image" content="<?php echo SITE_URL; ?>/<?php echo htmlspecialchars($project['image']); ?>">
  <meta property="og:url" content="<?php echo SITE_URL; ?>/project.php?slug=<?php echo urlencode($slug); ?>">
</head>
<body>

  <div class="cursor" id="cursor"></div>
  <div class="cursor-follower" id="cursor-follower"></div>

  <canvas id="dark-canvas"></canvas>
  <canvas id="light-canvas"></canvas>

  <div id="app">
    <!-- NAVBAR -->
    <nav id="navbar">
      <a href="index.php#home" class="nav-logo">
        <img src="images/logo-dark.png" alt="OMG" class="nav-logo-img for-dark" />
        <img src="images/logo-light.png" alt="OMG" class="nav-logo-img for-light" />
        <span class="nav-logo-wordmark">Graphics</span>
      </a>
      <ul class="nav-links">
        <li><a href="index.php#about">About</a></li>
        <li><a href="index.php#portfolio">Work</a></li>
        <li><a href="index.php#testimonials">Clients</a></li>
        <li><a href="index.php#contact">Contact</a></li>
      </ul>
      <div class="nav-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"></button>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
      <a href="index.php#about" onclick="closeMobile()">About</a>
      <a href="index.php#portfolio" onclick="closeMobile()">Work</a>
      <a href="index.php#testimonials" onclick="closeMobile()">Clients</a>
      <a href="index.php#contact" onclick="closeMobile()">Contact</a>
    </div>

    <!-- PROJECT HERO -->
    <section style="position:relative;min-height:60vh;display:flex;align-items:flex-end;padding:140px 5vw 60px;overflow:hidden;">
      <img src="<?php echo htmlspecialchars($project['image']); ?>" alt="<?php echo htmlspecialchars($project['title']); ?>"
           style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.4;">
      <div style="position:absolute;inset:0;background:linear-gradient(to top, var(--bg) 5%, transparent 80%);"></div>
      <div style="position:relative;max-width:1200px;margin:0 auto;width:100%;">
        <a href="index.php#portfolio" style="display:inline-flex;align-items:center;gap:8px;color:var(--text2);font-size:0.85rem;text-decoration:none;margin-bottom:24px;">
          <i class="fa-solid fa-arrow-left"></i> Back to Portfolio
        </a>
        <div>
          <span class="portfolio-card-tag" style="margin-bottom:16px;"><?php echo htmlspecialchars($categoryLabel); ?></span>
        </div>
        <h1 style="font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(32px,6vw,64px);color:var(--text);letter-spacing:-0.02em;line-height:1.05;margin-bottom:16px;">
          <?php echo htmlspecialchars($project['title']); ?>
        </h1>
        <p style="color:var(--text2);font-size:1rem;">
          <?php echo htmlspecialchars($project['client'] ?? ''); ?><?php echo !empty($project['client']) && !empty($project['year']) ? ' · ' : ''; ?><?php echo htmlspecialchars((string)($project['year'] ?? '')); ?>
        </p>
      </div>
    </section>

    <!-- MEDIA + ACTIONS -->
    <section style="padding:20px 5vw 60px;">
      <div style="max-width:900px;margin:0 auto;">
        <div style="border-radius:16px;overflow:hidden;border:1px solid var(--border);margin-bottom:24px;background:var(--surface);">
          <img src="<?php echo htmlspecialchars($project['image']); ?>" alt="<?php echo htmlspecialchars($project['title']); ?>" style="width:100%;height:auto;display:block;">
        </div>
        <div class="modal-actions" style="margin-top:0;">
          <a href="<?php echo htmlspecialchars($project['image']); ?>" download="<?php echo htmlspecialchars($project['title']); ?>.jpg" class="btn-primary">
            <i class="fa-solid fa-download"></i> Download Design
          </a>
          <button onclick="shareItem('<?php echo htmlspecialchars($project['id'] ?? $project['slug']); ?>')" class="btn-outline">
            <i class="fa-solid fa-share-nodes"></i> Share
          </button>
        </div>
      </div>
    </section>

    <!-- WRITE-UP -->
    <section style="padding:20px 5vw 80px;">
      <div style="max-width:900px;margin:0 auto;">
        <?php if (!empty($project['brief'])): ?>
        <div class="process-step">
          <div class="process-step-label">The Brief</div>
          <h4>Client Brief &amp; Vision</h4>
          <p><?php echo nl2br(htmlspecialchars($project['brief'])); ?></p>
        </div>
        <?php endif; ?>

        <?php if (!empty($project['problem'])): ?>
        <div class="process-step yellow">
          <div class="process-step-label">The Problem</div>
          <h4>Problem to Solve</h4>
          <p><?php echo nl2br(htmlspecialchars($project['problem'])); ?></p>
        </div>
        <?php endif; ?>

        <?php if (!empty($project['challenges'])): ?>
        <div class="process-step blue">
          <div class="process-step-label">The Challenges</div>
          <h4>Obstacles Along the Way</h4>
          <p><?php echo nl2br(htmlspecialchars($project['challenges'])); ?></p>
        </div>
        <?php endif; ?>

        <?php if (!empty($project['solution'])): ?>
        <div class="process-step green">
          <div class="process-step-label">The Solution</div>
          <h4>How We Solved It</h4>
          <p><?php echo nl2br(htmlspecialchars($project['solution'])); ?></p>
        </div>
        <?php endif; ?>

        <?php if (!empty($project['outcome'])): ?>
        <div class="process-step">
          <div class="process-step-label">The Outcome</div>
          <h4>Results &amp; Impact</h4>
          <p><?php echo nl2br(htmlspecialchars($project['outcome'])); ?></p>
        </div>
        <?php endif; ?>
      </div>
    </section>

    <!-- RELATED -->
    <?php if (!empty($related)): ?>
    <section style="padding:20px 5vw 100px;">
      <div style="max-width:1200px;margin:0 auto;">
        <h3 style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.6rem;color:var(--text);margin-bottom:28px;">More <?php echo htmlspecialchars($categoryLabel); ?> Projects</h3>
        <div class="portfolio-grid">
          <?php foreach ($related as $r): ?>
          <a class="portfolio-card" href="project.php?slug=<?php echo urlencode($r['slug']); ?>">
            <div class="portfolio-card-media">
              <img src="<?php echo htmlspecialchars($r['image']); ?>" alt="<?php echo htmlspecialchars($r['title']); ?>" loading="lazy">
            </div>
            <div class="portfolio-card-body">
              <span class="portfolio-card-tag"><?php echo htmlspecialchars(PORTFOLIO_CATEGORIES[$r['category']] ?? ''); ?></span>
              <h3><?php echo htmlspecialchars($r['title']); ?></h3>
              <p><?php echo htmlspecialchars($r['client'] ?? ''); ?><?php echo !empty($r['client']) && !empty($r['year']) ? ' · ' : ''; ?><?php echo htmlspecialchars((string)($r['year'] ?? '')); ?></p>
            </div>
          </a>
          <?php endforeach; ?>
        </div>
      </div>
    </section>
    <?php endif; ?>

    <!-- CTA -->
    <section style="padding:60px 5vw 100px;text-align:center;">
      <h2 style="font-family:'Syne',sans-serif;font-weight:800;font-size:clamp(28px,4vw,44px);color:var(--text);letter-spacing:-0.02em;margin-bottom:16px;">Like what you see?</h2>
      <p style="color:var(--text2);font-size:1rem;margin-bottom:32px;">Let's create something like this for your brand.</p>
      <a href="index.php#contact" class="btn-primary" style="display:inline-flex;">
        <i class="fa-solid fa-paper-plane"></i> Start a Project
      </a>
    </section>

    <footer>
      <a href="index.php#home" class="nav-logo">
        <img src="images/logo-dark.png" alt="OMG" class="nav-logo-img for-dark" />
        <img src="images/logo-light.png" alt="OMG" class="nav-logo-img for-light" />
        <span class="nav-logo-wordmark">Graphics</span>
      </a>
      <div class="footer-copy">&copy; 2026 OMG Graphics. All Rights Reserved...</div>
    </footer>
  </div>

  <script src="js/omg.js?v=<?php echo $assetVerJs; ?>"></script>
</body>
</html>
