<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 | Lost in the Hub</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet">
    <style>
        :root {
            --neon-green: #2419ff;
            --neon-pink: #fb2121;
            --neon-yellow: #fbd721;
            --dark-bg: #050505;
        }

        body {
            background-color: var(--dark-bg);
            color: white;
            font-family: 'Inter', sans-serif;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin: 0;
        }

        .error-container { position: relative; text-align: center; z-index: 10; }

        /* Glitch Effect for the 404 text */
        .glitch {
            font-size: 12rem;
            font-weight: 900;
            position: relative;
            color: white;
            text-shadow: 0.05em 0 0 var(--neon-pink), -0.05em -0.025em 0 var(--neon-green);
            animation: glitch 500ms infinite;
        }

        @keyframes glitch {
            0% { text-shadow: 0.05em 0 0 var(--neon-pink), -0.05em -0.025em 0 var(--neon-green); }
            15% { text-shadow: 0.05em 0 0 var(--neon-pink), -0.05em -0.025em 0 var(--neon-green); }
            16% { text-shadow: -0.05em -0.025em 0 var(--neon-pink), 0.025em 0.025em 0 var(--neon-green); }
            100% { text-shadow: -0.025em 0 0 var(--neon-pink), -0.025em -0.025em 0 var(--neon-green); }
        }

        .message {
            font-size: 1.5rem;
            letter-spacing: 5px;
            text-transform: uppercase;
            color: var(--neon-pink);
            margin-bottom: 2rem;
        }

        .btn-neon {
            border: 2px solid var(--neon-yellow);
            color: var(--neon-yellow);
            padding: 15px 40px;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 2px;
            text-decoration: none;
            transition: 0.3s;
            box-shadow: 0 0 10px var(--neon-pink);
        }

        .btn-neon:hover {
            background: var(--neon-pink);
            color: white;
            box-shadow: 0 0 30px var(--neon-pink);
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="error-container">
        <div class="glitch">404</div>
        <div class="message">Signal Lost in Space</div>
        <p class="text-white-50 mb-5">The page you're looking for doesn't exist or was moved.</p>
        <a href="index.php" class="btn-neon">Return to Base</a>
    </div>
</body>
</html>