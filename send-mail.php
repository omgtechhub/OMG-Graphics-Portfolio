<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = htmlspecialchars(trim($_POST['name']    ?? ''));
    $email   = htmlspecialchars(trim($_POST['email']   ?? ''));
    $service = htmlspecialchars(trim($_POST['service'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if ($name && $email && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);
        try {
            $envFile = __DIR__ . '/env/credentials.php';
            $credentials = file_exists($envFile) ? require $envFile : [];

            $smtpHost   = $credentials['SMTP_HOST']   ?? getenv('SMTP_HOST')   ?: 'smtp.gmail.com';
            $smtpPort   = $credentials['SMTP_PORT']   ?? getenv('SMTP_PORT')   ?: 587;
            $smtpSecure = $credentials['SMTP_SECURE'] ?? getenv('SMTP_SECURE') ?: 'tls';
            $smtpUser   = $credentials['SMTP_USER']   ?? getenv('SMTP_USER')   ?: '';
            $smtpPass   = $credentials['SMTP_PASS']   ?? getenv('SMTP_PASS')   ?: '';

            $mail->isSMTP();
            $mail->Host       = $smtpHost;
            $mail->SMTPAuth   = true;
            $mail->Username   = $smtpUser;
            $mail->Password   = $smtpPass;
            $mail->SMTPSecure = $smtpSecure;
            $mail->Port       = (int) $smtpPort;

            $mail->setFrom($smtpUser ?: 'noreply@omggraphics.net', 'Portfolio Contact');
            $mail->addAddress($smtpUser ?: 'omigiegraphics@gmail.com');
            $mail->addReplyTo($email, $name);

            $mail->Subject = "New message from $name";
            $mail->Body    = "Name: $name\nEmail: $email\nService: $service\n\nMessage:\n$message";

            $mail->send();
            header('Location: index.php?status=success#contact');
        } catch (Exception $e) {
            header('Location: index.php?status=error#contact');
        }
    } else {
        header('Location: index.php?status=invalid#contact');
    }
    exit;
}