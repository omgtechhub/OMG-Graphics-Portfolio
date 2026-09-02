<?php $assetVer = @filemtime(__DIR__ . '/css/omg.css') ?: time(); $assetVerJs = @filemtime(__DIR__ . '/js/omg.js') ?: time(); ?>
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OMG Graphics</title>
  <link rel="stylesheet" href="css/omg.css?v=<?php echo $assetVer; ?>" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&family=Space+Mono:wght@400;700&family=Inter:wght@800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <meta name="google-site-verification" content="3ompzCy8I1eW798OXJjc5wvinB5udYJcrk7Jx_Sjanc" />

    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">

    <link rel="manifest" href="site.webmanifest">

    <link rel="shortcut icon" href="favicon.ico">
    
    <meta name="description" content="At OMG GRAPHICS, we don't just design; we command attention. We specialize in helping business brands stand out so boldly that your target audience will find it impossible to ignore you. Elevate your brand identity today.">
    <meta name="keywords" content="Graphic Designer Nigeria, Church Flyer Design, Birthday Flyer Design, Logo Designer Benin City, OMG Graphics">
    <meta name="author" content="OMG Graphics">

    <meta property="og:title" content="OMG Graphics | Portfolio">
    <meta property="og:description" content="Designs that make you say OMG! Book your project today via WhatsApp.">
    <meta property="og:image" content="https://omggraphics.great-site.net/images/omglogo2.jpeg">
    <meta property="og:url" content="https://omggraphics.great-site.net">

    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OMG GRAPHICS",
      "url": "https://omggraphics.great-site.net",
      "logo": "https://omggraphics.great-site.net/images/omglogo.jpeg",
      "image": "https://omggraphics.great-site.net/images/omglogo.jpeg",
      "description": "At OMG GRAPHICS, we don't just design; we command attention. We specialize in helping business brands stand out so boldly that your target audience will find it impossible to ignore you. Elevate your brand identity today."
    }
    </script>

</head>
<body>

  <div class="cursor" id="cursor"></div>
  <div class="cursor-follower" id="cursor-follower"></div>

  <canvas id="dark-canvas"></canvas>
  <canvas id="light-canvas"></canvas>

  <div id="app">
    <!-- NAVBAR -->
    <nav id="navbar">
      <a href="#home" class="nav-logo">
        <img src="images/logo-dark.png" alt="OMG" class="nav-logo-img for-dark" />
        <img src="images/logo-light.png" alt="OMG" class="nav-logo-img for-light" />
        <span class="nav-logo-wordmark">Graphics</span>
      </a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#testimonials">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div class="nav-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"></button>
        <button class="hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu">
      <a href="#about" onclick="closeMobile()">About</a>
      <a href="#portfolio" onclick="closeMobile()">Work</a>
      <a href="#testimonials" onclick="closeMobile()">Clients</a>
      <a href="#contact" onclick="closeMobile()">Contact</a>
    </div>

    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="availability" style="display:inline-flex;margin-bottom:1.5rem;opacity:0;animation:fadeUp 0.8s 0.1s forwards;">
            <span class="blink-dot"></span>
            <span>Available for Projects</span>
          </div>
          <div class="hero-eyebrow">Credit: <span style="font-weight: bold; color: #9E9E9E">OMG TECH HUB</span></div>
          <div class="hero-title-lines">
            <div class="hero-title">Visual</div>
            <div class="hero-title">
              <span class="glitch-word" data-text="Solutions">Solutions</span>
            </div>
            <div class="hero-title">That Speak</div>
          </div>
          <p class="hero-subtitle">We don&rsquo;t just design &mdash; we solve problems through visual communication. Every pixel tells a story, every composition builds a brand.</p>
          <div class="hero-cta">
            <a href="#portfolio" class="btn-primary"><i class="fa-solid fa-eye"></i> View Work</a>
            <a href="#contact" class="btn-outline"><i class="fa-solid fa-paper-plane"></i> Get in Touch</a>
          </div>
        </div>
        <div class="hero-image-col">
          <div class="about-image-wrap">
            <div class="about-image-frame">
              <img src="images/profilepicture.jpeg" alt="profile picture" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
            </div>
            <div class="about-badge">
              <span>5+</span>
              <span>YEARS</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-line"></div>
        Scroll to explore
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-section">
      <div class="marquee-track" id="marqueeTrack"></div>
    </div>

    <!-- STATS -->
    <section class="stats-section" id="stats">
      <div class="stats-inner">
        <div class="stat-card reveal-popIn" style="transition-delay:0.1s">
          <div class="stat-number"><span id="counter1">0</span><span class="plus">%</span></div>
          <div class="stat-desc">Customer Satisfaction</div>
        </div>
        <div class="stat-card reveal-rotateIn" style="transition-delay:0.2s">
          <div class="stat-number"><span id="counter2">0</span><span class="plus">+</span></div>
          <div class="stat-desc">Brands Designed</div>
        </div>
        <div class="stat-card reveal-bounce" style="transition-delay:0.3s">
          <div class="stat-number"><span id="counter3">0</span><span class="plus">+</span></div>
          <div class="stat-desc">Projects Completed</div>
        </div>
        <div class="stat-card reveal-swingIn" style="transition-delay:0.4s">
          <div class="stat-number"><span id="counter4">0</span><span class="plus">+</span></div>
          <div class="stat-desc">Years of Experience</div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about">
      <div class="about-grid">
        <div class="about-image-wrap reveal-left">
          <div class="about-image-frame">
		  <img src="images/profileimage.jpeg" alt="profile image" style="width:100%;height:100%;object-fit:cover;border-radius:16px;">
            </div>
          <div class="about-badge">
            <span>5+</span>
            <span>YEARS</span>
          </div>
        </div>
        <div class="about-content reveal-right">
          <div class="section-label">About Us</div>
          <h2 class="section-title">Design is <span>Problem</span> <span class="accent">Solving</span></h2>
          <p class="desc">OMG Graphics was built on one belief &mdash; that great design is never just aesthetic. It&rsquo;s a strategic tool that communicates, converts, and connects brands to their audiences.</p>
          <p class="desc">Based in Benin City, Nigeria, we work with brands across Africa and beyond, bringing creative intelligence, cultural nuance, and relentless attention to detail to every project we touch.</p>
          <p class="desc">From startups to established enterprises, we&rsquo;ve helped over 50 brands find their visual voice &mdash; and the results speak for themselves.</p>
          <div class="about-tags">
            <span class="tag">Brand Identity</span>
            <span class="tag">Logo Design</span>
            <span class="tag">Flyer Design</span>
            <span class="tag">Social Media</span>
            <span class="tag">Poster Design</span>
            <span class="tag">Packaging</span>
            <span class="tag">Motion Graphics</span>
            <span class="tag">Typography</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="portfolio-section" id="portfolio">
      <div class="section-label reveal">Selected Work</div>
      <h2 class="section-title reveal">Design <span>Portfolio</span></h2>
      <div class="portfolio-filter reveal">
        <button class="filter-btn active" data-filter="all">All Work</button>
        <button class="filter-btn" data-filter="brand">Brand Identity</button>
        <button class="filter-btn" data-filter="poster">Posters &amp; Flyers</button>
        <button class="filter-btn" data-filter="social">Social Media</button>
        <button class="filter-btn" data-filter="birthday">Birthday</button>
      </div>
      <div class="portfolio-grid" id="portfolioGrid"></div>
    </section>

    <!-- TESTIMONIALS -->
    <section id="testimonials">
      <div class="section-label reveal">Client Love</div>
      <h2 class="section-title reveal">What <span>Clients</span> Say</h2>
      <div class="testimonials-grid" id="testimonialsGrid"></div>
    </section>

    <!-- CONTACT -->
<section class="contact-section" id="contact">
  <div class="section-label reveal">Get in Touch</div>
  <h2 class="section-title reveal">Let&rsquo;s Build <span>Something</span> <span class="accent">Together</span></h2>
  <div class="contact-columns">
    <!-- Left column: contact info -->
    <div class="contact-col-left reveal-left">
      <p class="contact-desc" style="margin-bottom:2rem;">Have a project in mind? Let&rsquo;s talk. I&rsquo;m always open to new collaborations, challenges, and creative briefs.</p>
      <div class="contact-info-list">
        <a href="mailto:omigiegraphics@email.com" class="contact-info-item">
          <span class="contact-info-icon"><i class="fa-solid fa-envelope"></i></span>
          <span>info@omggraphics.com</span>
        </a>
        <a href="tel:+2347084321204" class="contact-info-item">
          <span class="contact-info-icon"><i class="fa-solid fa-phone"></i></span>
          <span>+234 708 432 1204</span>
        </a>
        <div class="contact-info-item">
          <span class="contact-info-icon"><i class="fa-solid fa-location-dot"></i></span>
          <span>Benin City, Nigeria</span>
        </div>
      </div>
      <div class="social-links">
        <a href="https://www.facebook.com/omigie.aisosa" class="social-link fb" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/omigiedavid?igsh=Njk3b3N4ZjFmM3J0" class="social-link ig" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://x.com/OMGTechHub" class="social-link tw" title="Twitter / X"><i class="fab fa-x-twitter"></i></a>
        <a href="https://wa.link/jdks15" class="social-link wa" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.linkedin.com/in/david-omigie-2b0644353" class="social-link li" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <!-- Right column: contact form -->
    <div class="contact-col-right reveal-right">
      <p class="contact-form-title">Send a <span>Message</span></p>
      <form class="contact-form" id="contactForm" action="send-mail.php" method="POST">
        <div class="form-group">
          <label for="cf-name">Your Name</label>
          <input type="text" id="cf-name" name="name" placeholder="e.g. John Doe" required />
        </div>
        <div class="form-group">
          <label for="cf-email">Email Address</label>
          <input type="email" id="cf-email" name="email" placeholder="e.g. hello@example.com" required />
        </div>
        <div class="form-group">
          <label for="cf-service">Service Needed</label>
          <select id="cf-service" name="service">
            <option value="" disabled selected>Select a service&hellip;</option>
            <option value="logo">Logo &amp; Brand Identity</option>
            <option value="social">Social Media Design</option>
            <option value="flyer">Flyer &amp; Poster Design</option>
            <option value="packaging">Packaging Design</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="cf-message">Your Message</label>
          <textarea id="cf-message" name="message" placeholder="Tell me about your project&hellip;" required></textarea>
        </div>
        <?php
$status = $_GET['status'] ?? '';
if ($status === 'success'): ?>
  <p class="form-feedback success">
    <i class="fa-solid fa-circle-check"></i> Message sent successfully!
  </p>
<?php elseif ($status === 'error'): ?>
  <p class="form-feedback error">
    <i class="fa-solid fa-triangle-exclamation"></i> Mail server error. Try again.
  </p>
<?php elseif ($status === 'invalid'): ?>
  <p class="form-feedback error">
    <i class="fa-solid fa-triangle-exclamation"></i> Please fill all fields correctly.
  </p>
<?php endif; ?>
        <button type="submit" class="form-submit">
          <i class="fa-solid fa-paper-plane"></i> Send Message
        </button>
      </form>
    </div>
  </div>
</section>

    <footer>
      <a href="#home" class="nav-logo">
        <img src="images/logo-dark.png" alt="OMG" class="nav-logo-img for-dark" />
        <img src="images/logo-light.png" alt="OMG" class="nav-logo-img for-light" />
        <span class="nav-logo-wordmark">Graphics</span>
      </a>
      <div class="footer-copy">&copy; 2026 OMG Graphics. All Rights Reserved...</div>
    </footer>
  </div>

  <!-- MODAL -->
  <div class="modal-overlay" id="processModal">
    <div class="modal" id="modalContent">
      <div class="modal-header">
        <h2 id="modalTitle">Design Process</h2>
        <button class="modal-close" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="modal-body" id="modalBody"></div>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div id="lightbox">
  <span id="lightbox-close" onclick="closeLightbox()">&times;</span>
  <button class="lightbox-nav" id="lightbox-prev" onclick="navigateLightbox(-1)">&#8249;</button>
  <img id="lightbox-img" src="" alt="" />
  <button class="lightbox-nav" id="lightbox-next" onclick="navigateLightbox(1)">&#8250;</button>
</div>

  <script src="js/omg.js?v=<?php echo $assetVerJs; ?>"></script>
</body>
</html>