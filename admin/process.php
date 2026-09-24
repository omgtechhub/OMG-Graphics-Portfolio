<?php
if (session_status() === PHP_SESSION_NONE) session_start();
require_once dirname(__DIR__) . '/includes/config.php';
require_once dirname(__DIR__) . '/includes/db.php';
require_once 'includes/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: dashboard.php'); exit; }

$action = $_POST['action'] ?? '';
$id     = trim($_POST['id'] ?? '');

if ($action === 'delete_project' && $id) {
    $project = project_by_id($id);
    if ($project) {
        foreach (project_images($project) as $img) {
            if ($img && file_exists(dirname(__DIR__) . '/' . $img)) {
                @unlink(dirname(__DIR__) . '/' . $img);
            }
        }
        portfolio_delete($id);
        $_SESSION['flash'] = 'Project deleted.';
    } else {
        $_SESSION['flash_err'] = 'Project not found.';
    }
}

header('Location: dashboard.php');
exit;
