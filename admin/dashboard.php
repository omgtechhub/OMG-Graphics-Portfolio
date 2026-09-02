<?php
if (session_status() === PHP_SESSION_NONE) session_start();
require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';
require_once 'includes/auth.php';
require_once 'includes/layout.php';

$allProjects   = portfolio_all(false);
$pubProjects   = array_filter($allProjects, fn($p) => ($p['status'] ?? '') === 'published');
$draftProjects = array_filter($allProjects, fn($p) => ($p['status'] ?? '') === 'draft');

$msg = $_SESSION['flash']     ?? ''; unset($_SESSION['flash']);
$err = $_SESSION['flash_err'] ?? ''; unset($_SESSION['flash_err']);

layout_head('Dashboard');
layout_sidebar('dashboard');
?>
<div class="admin-topbar">
  <div class="topbar-title">Dashboard</div>
  <div class="topbar-actions">
    <a href="upload_portfolio.php" class="btn btn-primary btn-sm">
      <?php echo svg_plus(); ?> Upload Portfolio
    </a>
  </div>
</div>

<div class="admin-content">
  <?php if($msg): ?><div class="alert alert-success"><?php echo htmlspecialchars($msg); ?></div><?php endif; ?>
  <?php if($err): ?><div class="alert alert-error"><?php echo htmlspecialchars($err); ?></div><?php endif; ?>

  <!-- Stats -->
  <div class="stat-grid">
    <div class="stat-card">
      <div class="stat-card-icon">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <div class="stat-card-num"><?php echo count($allProjects); ?></div>
      <div class="stat-card-label">Total Projects</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-icon">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="stat-card-num" style="color:#16a34a;"><?php echo count($pubProjects); ?></div>
      <div class="stat-card-label">Published</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-icon">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      </div>
      <div class="stat-card-num" style="color:var(--text-3);"><?php echo count($draftProjects); ?></div>
      <div class="stat-card-label">Drafts</div>
    </div>
    <div class="stat-card">
      <div class="stat-card-icon">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
      </div>
      <div class="stat-card-num"><?php echo count(PORTFOLIO_CATEGORIES); ?></div>
      <div class="stat-card-label">Categories</div>
    </div>
  </div>

  <!-- Portfolio table -->
  <div class="admin-card" style="padding:0;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid var(--border);">
      <div class="admin-card-title" style="margin:0;border:none;padding:0;">Portfolio Projects <span style="color:var(--text-3);font-weight:500;">— uploaded via admin</span></div>
      <a href="upload_portfolio.php" class="btn btn-ghost btn-sm"><?php echo svg_plus(); ?> Add</a>
    </div>

    <?php if (empty($allProjects)): ?>
    <div style="padding:60px 24px;text-align:center;">
      <svg width="40" height="40" fill="none" stroke="var(--text-4)" stroke-width="1.5" viewBox="0 0 24 24" style="margin:0 auto 14px;"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      <p style="color:var(--text-3);font-size:.9rem;margin-bottom:16px;">No projects uploaded yet.<br>The 28 original portfolio pieces live in the site's code — this table only shows projects added through this admin panel.</p>
      <a href="upload_portfolio.php" class="btn btn-primary btn-sm">Upload your first project →</a>
    </div>
    <?php else: ?>
    <div style="overflow-x:auto;">
    <table class="admin-table">
      <thead>
        <tr><th>Project</th><th>Category</th><th>Status</th><th>Date</th><th>Actions</th></tr>
      </thead>
      <tbody>
      <?php foreach ($allProjects as $p): ?>
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:12px;">
            <?php if (!empty($p['image'])): ?>
              <img class="post-thumb" src="../<?php echo htmlspecialchars($p['image']); ?>" alt="">
            <?php else: ?>
              <div class="post-thumb-placeholder">🖼️</div>
            <?php endif; ?>
            <div>
              <div style="font-weight:600;font-size:.875rem;max-width:300px;line-height:1.35;"><?php echo htmlspecialchars($p['title']); ?></div>
              <div style="font-size:.76rem;color:var(--text-3);margin-top:2px;"><?php echo htmlspecialchars($p['client'] ?? ''); ?><?php echo !empty($p['year']) ? ' · ' . htmlspecialchars((string)$p['year']) : ''; ?></div>
            </div>
          </div>
        </td>
        <td><span class="badge badge-<?php echo htmlspecialchars($p['category'] ?? ''); ?>"><?php echo htmlspecialchars(PORTFOLIO_CATEGORIES[$p['category']] ?? ''); ?></span></td>
        <td><span class="badge badge-<?php echo htmlspecialchars($p['status'] ?? 'draft'); ?>"><?php echo ucfirst($p['status'] ?? 'draft'); ?></span></td>
        <td style="color:var(--text-3);font-size:.8rem;white-space:nowrap;"><?php echo !empty($p['created_at']) ? date('M d, Y', strtotime($p['created_at'])) : '—'; ?></td>
        <td>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <a href="edit_portfolio.php?id=<?php echo urlencode($p['id']); ?>" class="btn btn-ghost btn-sm"><?php echo svg_edit(); ?> Edit</a>
            <?php if (($p['status'] ?? '') === 'published'): ?>
            <a href="<?php echo SITE_URL; ?>/project.php?slug=<?php echo urlencode($p['slug']); ?>" target="_blank" class="btn btn-ghost btn-sm"><?php echo svg_view(); ?> View</a>
            <?php endif; ?>
            <form method="post" action="process.php" onsubmit="return confirm('Delete this project permanently?');" style="display:inline;">
              <input type="hidden" name="action" value="delete_project">
              <input type="hidden" name="id" value="<?php echo htmlspecialchars($p['id']); ?>">
              <button type="submit" class="btn btn-danger btn-sm"><?php echo svg_trash(); ?></button>
            </form>
          </div>
        </td>
      </tr>
      <?php endforeach; ?>
      </tbody>
    </table>
    </div>
    <?php endif; ?>
  </div>
</div>
<?php layout_foot(); ?>
