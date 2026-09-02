// ===== IMAGE PATHS =====
const IMG_GALLERY = "images/gallery.jpeg";
const IMG_GALLERY2 = "images/gallery2.jpeg";
const IMG_GALLERY3 = "images/gallery3.jpeg";
const IMG_GALLERY4 = "images/gallery4.jpeg";
const IMG_GALLERY5 = "images/gallery5.jpeg";
const IMG_GALLERY6 = "images/gallery6.jpeg";
const IMG_GALLERY7 = "images/gallery7.jpeg";
const IMG_GALLERY8 = "images/gallery8.jpeg";
const IMG_GALLERY9 = "images/gallery9.jpeg";
const IMG_GALLERY10 = "images/gallery10.jpeg";
const IMG_GALLERY11 = "images/gallery11.jpeg";
const IMG_GALLERY12 = "images/gallery12.jpeg";
const IMG_GALLERY13 = "images/gallery13.jpeg";
const IMG_GALLERY14 = "images/gallery14.jpeg";
const IMG_GALLERY15 = "images/gallery15.jpeg";
const IMG_GALLERY16 = "images/gallery16.jpeg";
const IMG_GALLERY17 = "images/gallery17.jpeg";
const IMG_GALLERY18 = "images/gallery18.jpeg";
const IMG_GALLERY19 = "images/gallery19.jpeg";
const IMG_GALLERY20 = "images/gallery20.jpeg";
const IMG_GALLERY21 = "images/gallery21.jpeg";
const IMG_GALLERY22 = "images/gallery22.jpeg";
const IMG_GALLERY23 = "images/gallery23.jpeg";
const IMG_GALLERY24 = "images/gallery24.jpeg";
const IMG_GALLERY25 = "images/gallery25.jpeg";
const IMG_GALLERY26 = "images/gallery26.jpeg";
const IMG_GALLERY27 = "images/gallery27.jpeg";
const IMG_GALLERY28 = "images/gallery28.jpeg";
const IMG_GALLERY29 = "images/gallery29.jpeg";
const IMG_GALLERY30 = "images/gallery30.jpeg";


// ===== PORTFOLIO DATA =====
// Each item now carries `slug`, `client`, and `year` so it can link to its
// own page (project.php?slug=...) and show a "Client · Year" line on its
// card, matching the OMG Tech Hub portfolio structure. Copy/fields are
// otherwise unchanged from the original 28 pieces.
const portfolioItems = [
  { id: 1, slug: "qatar-travel-package", img: IMG_GALLERY, title: "Qatar Travel Package", category: "brand", type: "Travel & Tourism Flyer", client: "Kings Travels", year: 2026,
    brief: "Kings Travels required a luxury-themed flyer to promote a curated group trip to Qatar.",
    problem: "Travel flyers often look cluttered with too many tiny photos, making the destination feel cheap rather than premium.",
    challenges: "Integrating the iconic Katara Towers architecture with package details while maintaining a clean, aspirational 'sunset' aesthetic.",
    solution: "Used a dominant hero image of Doha’s skyline with a torn-paper texture transition to house the text, ensuring the 'Qatar' typography remained the focal point.",
    outcome: "The flyer successfully drove inquiries for the May 2026 window, specifically attracting high-interest travelers via WhatsApp." },

  { id: 2, slug: "valentine-special-promo", img: IMG_GALLERY2, title: "Valentine Special Promo", category: "social", type: "Seasonal Sales Flyer", client: "OMG Graphics", year: 2025,
    brief: "OMG Graphics needed a self-promotional design to offer a 30% discount on design services during the Valentine's season.",
    problem: "Standard sales flyers can feel transactional; this needed to feel emotional and 'giftable'.",
    challenges: "Working with a monochromatic red palette without making the text unreadable or the icons get lost in the background.",
    solution: "Utilized deep red gradients, 3D floating hearts for depth, and elegant script typography to emphasize the 'Valentine' theme.",
    outcome: "Resulted in a significant uptick in logo and flyer bookings during the February promotion period." },

  { id: 3, slug: "call-to-bar-ceremony", img: IMG_GALLERY3, title: "Call to Bar Ceremony", category: "poster", type: "Commemorative Invitation", client: "Rifkatu Ali Esq.", year: 2025,
    brief: "A celebratory invitation for Rifkatu Ali Esq. to mark her achievement of being called to the Nigerian Bar.",
    problem: "Legal invitations often look overly formal and dry, lacking a sense of personal celebration.",
    challenges: "Maintaining the dignity of the legal profession (the wig and gown) while creating a festive atmosphere with lighting effects.",
    solution: "A sophisticated dark background with gold 'bokeh' light effects and bold, serif typography to reflect the prestige of the Supreme Court.",
    outcome: "The design served as both a digital invitation and a keepsake for the celebrant's family and colleagues." },

  { id: 4, slug: "omg-tech-hub-welcome-to-may", img: IMG_GALLERY4, title: "OMG Tech Hub Welcome to May", category: "social", type: "Corporate Greeting Flyer", client: "OMG Tech Hub", year: 2026,
    brief: "OMG Tech Hub needed a professional and engaging flyer to welcome the month of May and highlight their diverse digital services.",
    problem: "Monthly greeting flyers often focus solely on the message, missing the opportunity to reinforce brand capabilities and contact information.",
    challenges: "Balancing a professional portrait with a high-tech city background while keeping the service list legible and the 'May' typography prominent.",
    solution: "Utilized a centered subject layout with glowing neon typography for the month, while a clean white footer clearly categorizes five core tech services.",
    outcome: "The flyer successfully updated the brand's social media presence for the new month, encouraging patronage through a direct WhatsApp call-to-action." },

  { id: 5, slug: "birthday-flyer", img: IMG_GALLERY5, title: "Birthday Flyer", category: "birthday", type: "Social Media Birthday Flyer", client: "Personal Client (David)", year: 2025,
    brief: "A multi-photo commemorative flyer for a client named David, celebrating his birthday on April 20th.",
    problem: "The client wanted to showcase multiple outfits and poses without the design feeling like a simple photo collage.",
    challenges: "Creating a cohesive color story between the blue/white jersey and a warm, glowing background.",
    solution: "Used a large 'ghosted' background portrait and a central sharp portrait, surrounded by smaller polaroid-style thumbnails with a warm amber glow.",
    outcome: "The celebrant received high engagement on social media, with the 'reflection' typography at the bottom adding a premium touch." },

  { id: 6, slug: "jennifer-avhuri-birthday", img: IMG_GALLERY6, title: "Jennifer Avhuri Birthday", category: "birthday", type: "Social Media Birthday Flyer", client: "Jennifer Avhuri", year: 2025,
    brief: "A bright, elegant birthday design for Jennifer, emphasizing her personality through descriptive keywords.",
    problem: "The client wanted a 'clean girl' aesthetic that felt airy and luxurious rather than heavy and dark.",
    challenges: "Balancing the gold confetti and silk ribbon elements so they frame the subject rather than distracting from her face.",
    solution: "A minimalist white studio background paired with gold 3D elements and soft typography to highlight her attributes: 'Beautiful, God Fearing, Kind Hearted'.",
    outcome: "A highly shareable Instagram-style flyer that perfectly matched the celebrant's soft-glam aesthetic." },

  { id: 7, slug: "anointed-foods-branding", img: IMG_GALLERY7, title: "Anointed Foods Branding", category: "brand", type: "Business Advertisement Flyer", client: "Madam Go Well", year: 2025,
    brief: "Madam Go Well required a flyer to promote her indoor/outdoor catering services and variety of Nigerian dishes.",
    problem: "Food businesses need to show variety (pastries, rice, swallow) without the flyer looking messy.",
    challenges: "Organizing a long list of food items and contact details into a scannable format.",
    solution: "A circular 'petal' layout for food photography to showcase variety, using a warm 'appetite-stimulating' brown and white color palette.",
    outcome: "The flyer effectively communicated the location (UBTH Back Gate) and drove local foot traffic and catering bookings." },

  { id: 8, slug: "maldives-luxury-waterfall", img: IMG_GALLERY8, title: "Maldives Luxury Waterfall", category: "brand", type: "Travel & Tourism Flyer", client: "Kings Travels", year: 2026,
    brief: "Kings Travels required an alternative Maldives flyer highlighting the unique architectural and natural waterfall features of premium resorts.",
    problem: "Traditional island flyers can feel repetitive; this design needed to showcase a specific, high-end resort aesthetic to justify a premium price.",
    challenges: "Integrating a vertically complex image of a waterfall and tiered resort structure with a large 'Maldives' heading and detailed tour list.",
    solution: "Applied a textured overlay to the 'Maldives' text to mirror the natural resort vibe, using a torn-paper divider to house package data cleanly.",
    outcome: "The design reinforced the high-value ₦7,800,000 package, specifically targeting travelers looking for unique June 2026 experiences." },

  { id: 9, slug: "skyrise-2nd-anniversary", img: IMG_GALLERY9, title: "Skyrise 2nd Anniversary", category: "social", type: "Corporate Milestone Flyer", client: "SkyRise Realty Ltd", year: 2025,
    brief: "A celebratory graphic to mark the 2-year anniversary of Skyrise Realty Ltd under the theme 'Audacity of Hope'.",
    problem: "Anniversary posts can often be ignored; this needed to look prestigious and established.",
    challenges: "Working with a dark blue and gold theme to convey 'luxury' while keeping the '2 Years' as the primary visual hook.",
    solution: "Large gold 3D numbering intertwined with a red ribbon and flowing golden light trails against a deep navy background.",
    outcome: "The design reinforced brand trust and longevity, being used as the primary profile display for company stakeholders." },

  { id: 10, slug: "femo-homes-duplex-alert", img: IMG_GALLERY10, title: "Femo Homes Duplex Alert", category: "brand", type: "Real Estate Listing Flyer", client: "Femo Homes and Gardens", year: 2025,
    brief: "A premium listing flyer for a 4-bedroom semi-detached duplex in Lekki, Lagos, priced at ₦24 Million.",
    problem: "High-value properties need to look expensive. A basic flyer wouldn't justify the ₦24M price tag.",
    challenges: "Showing both the impressive exterior facade and the detailed interior finishes in one square layout.",
    solution: "A hero shot of the 'artistic architecture' at the top, followed by hexagonal interior thumbnails for the living room, bedroom, and kitchen.",
    outcome: "The blue and green color blocking created a 'trustworthy' corporate feel, leading to several physical inspections in the Lekki/Ajah axis." },

  { id: 11, slug: "ai-animation-masterclass", img: IMG_GALLERY11, title: "AI Animation Masterclass", category: "poster", type: "Webinar/Training Flyer", client: "Private Client", year: 2025,
    brief: "A digital creator needed a high-conversion flyer to sell an 'AI Animation' course for ₦3,000.",
    problem: "Tech masterclasses often look intimidating to beginners; the design needed to look accessible yet professional.",
    challenges: "Placing a large amount of course feature text and payment info without the layout feeling cramped.",
    solution: "Used a clean white-to-grey gradient background with red accents to draw attention to the 'Access Fee' and registration call-to-action.",
    outcome: "Clear information hierarchy led to high registration rates, with the price point clearly visible for quick decision-making." },

  { id: 12, slug: "skyrise-february-greeting", img: IMG_GALLERY12, title: "Skyrise February Greeting", category: "social", type: "Corporate Happy New Month Flyer", client: "SkyRise Realty Ltd", year: 2025,
    brief: "Skyrise Realty needed a branded graphic to maintain social media engagement at the start of February.",
    problem: "Generic 'Happy New Month' posts are often ignored; it needed to reinforce the company's property portfolio.",
    challenges: "Balancing the 'February' greeting with the brand's luxury property aesthetic.",
    solution: "Integrated a high-end modern building render with vibrant red and green typography to evoke a sense of freshness and growth.",
    outcome: "Strengthened brand presence and served as a soft reminder of the client’s real estate services to their followers." },

  { id: 13, slug: "christian-quote", img: IMG_GALLERY13, title: "Christian Quote", category: "social", type: "Social Media Quote Card", client: "ICCF Missions", year: 2025,
    brief: "A digital asset for ICCF Missions to share a specific message from Pastor Solomon Folorunsho.",
    problem: "Standard text posts get lost in feeds; the message needed a visual 'anchor'.",
    challenges: "Combining a portrait of the speaker with a large quote block while keeping the text as the primary focus.",
    solution: "Used a clean white speech bubble overlay with bold sans-serif type against a dark, out-of-focus background of the speaker.",
    outcome: "The graphic was widely shared on WhatsApp statuses, effectively spreading the ministry’s message beyond the congregation." },

  { id: 14, slug: "happy-new-week-skyrise", img: IMG_GALLERY14, title: "Happy New Week - Skyrise", category: "social", type: "Business Motivational Flyer", client: "SkyRise Realty Ltd", year: 2025,
    brief: "A Monday-morning engagement post for Skyrise Realty to motivate potential investors.",
    problem: "Motivational posts can feel disconnected from the business if not branded correctly.",
    challenges: "Using symbolic imagery (signposts) that aligns with real estate without looking like a stock template.",
    solution: "Designed a custom 3D signpost pointing toward 'Land', 'Property', and 'Investment' to align the greeting with the company’s core business.",
    outcome: "High engagement rates on Monday mornings, setting a professional tone for the work week." },

  { id: 15, slug: "apex-academic-services", img: IMG_GALLERY15, title: "Apex Academic Services", category: "brand", type: "Service Advertisement Flyer", client: "Apex Academic Consultancy", year: 2025,
    brief: "Apex Academic Consultancy needed a flyer to promote their project writing and proofreading services.",
    problem: "Academic services often look boring or overly academic; they needed to look professional yet modern.",
    challenges: "Listing five distinct services while leaving room for a clear contact CTA.",
    solution: "Used 3D academic icons (books, graduation cap, fountain pen) with a sleek black-on-orange info box to grab attention.",
    outcome: "Resulted in a direct increase in WhatsApp inquiries for project editing and business proposal services." },

  { id: 16, slug: "deliverance-from-power-of-darkness", img: IMG_GALLERY16, title: "Deliverance from Power of Darkness", category: "poster", type: "Church Crusade Flyer", client: "ICCF Missions", year: 2025,
    brief: "International Christian Center for Missions required a spiritual, evocative flyer for their upcoming program in Odighi Village.",
    problem: "Religious posters often use cluttered, low-quality stock images that fail to convey a deep spiritual message.",
    challenges: "Depicting the theme of 'Deliverance' visually without using cliché or frightening imagery.",
    solution: "Used a high-contrast 'reaching hand' metaphor against a textured parchment background to symbolize divine intervention and hope.",
    outcome: "The minimalist approach and clear blue info bar made the event details highly readable for a wide rural audience." },

  { id: 17, slug: "rwanda-urban-exploration", img: IMG_GALLERY17, title: "Rwanda Urban Exploration", category: "brand", type: "Travel & Tourism Flyer", client: "Kings Travels", year: 2026,
    brief: "A vibrant city-themed flyer for Kings Travels promoting a curated group excursion to Kigali, Rwanda.",
    problem: "Urban travel can sometimes feel less 'aspirational' than beach trips if the design doesn't capture the city's unique architectural beauty.",
    challenges: "Managing the high-energy colors of the Kigali Convention Centre at night without clashing with the sunset sky or branding elements.",
    solution: "Used a dominant skyline hero image and circular insets to showcase local culture and landmarks, tied together with a clean, structured footer.",
    outcome: "This flyer attracted interest for the June 10th–14th window, positioning Rwanda as a premier African destination for high-interest travelers." },

  { id: 18, slug: "sebfon-academy-class-banner", img: IMG_GALLERY18, title: "Sebfon Academy Class banner", category: "poster", type: "School Group Photo Flyer", client: "Sebfon Academy", year: 2025,
    brief: "A secondary graduation graphic for Sebfon Academy, focusing on group class photos and staff.",
    problem: "Group photos have different aspect ratios and lighting; they needed to be unified.",
    challenges: "Arranging 14 different group photos ranging from Staff to JSS 3 without losing the celebratory feel.",
    solution: "A balanced peripheral layout where the smallest classes and staff frame the central 'Happy Graduation' logo.",
    outcome: "Used as a featured post on the school's website for a period of time to showcase their student body and academic staff." },

  { id: 19, slug: "nerrgs-boutique-sales", img: IMG_GALLERY19, title: "Nerrg's Boutique Sales", category: "brand", type: "Retail Fashion Flyer", client: "Nerrg's Boutique", year: 2025,
    brief: "A luxury-style flyer for Nerrg’s Boutique to showcase their collection of designer wears and accessories.",
    problem: "Showing clothes, watches, shoes, and perfume all at once can look like a catalog rather than an ad.",
    challenges: "Creating a 'high-fashion' feel using flat product photography.",
    solution: "A deep maroon and gold color scheme with a grid of lifestyle product shots flanking a central hero image of a premium tuxedo.",
    outcome: "Successfully positioned the boutique as a 'one-stop shop' for luxury event outfits, specifically for the wedding season." },

  { id: 20, slug: "maldives-overwater-villa", img: IMG_GALLERY20, title: "Maldives Overwater Villa", category: "brand", type: "Travel & Tourism Flyer", client: "Kings Travels", year: 2026,
    brief: "A sunset-themed flyer for Kings Travels showcasing the iconic overwater villa experience in the Maldives.",
    problem: "Standard villa photos can lose their impact if the layout is too busy with text boxes that obscure the scenic horizon.",
    challenges: "Placing a large date banner and package details over a detailed drone shot of the villa lineup while maintaining a luxury feel.",
    solution: "Leveraged a sunset hero image as the primary background, using a 'torn paper' texture at the bottom to provide a neutral space for the itinerary.",
    outcome: "The flyer effectively communicated the romantic appeal of the June 2026 window, driving direct inquiries for the ₦7,800,000 per person package." },

  { id: 21, slug: "christian-discipleship-centre-summit", img: IMG_GALLERY21, title: "Christian Discipleship Centre Summit", category: "poster", type: "Religious Event Flyer", client: "Christian Discipleship Centre", year: 2025,
    brief: "The Christian Discipleship Centre required a clean, heavenly-themed flyer for their 2025 Summit titled 'IN HIM'.",
    problem: "Church flyers often use dark or cluttered imagery that can feel heavy; the client wanted something that felt light and airy.",
    challenges: "Working with a very bright background while ensuring white text remains readable and professional.",
    solution: "Used a sky-blue cloud background with heavy black outlines on the main title and distinct stroke-bordered boxes for the venue and date.",
    outcome: "The high-contrast 'IN HIM' centerpiece effectively drew attention to the theme, making it easily recognizable on digital notice boards." },

  { id: 22, slug: "sebfon-academy-cultural-celebration", img: IMG_GALLERY22, title: "Sebfon Academy Cultural Celebration", category: "poster", type: "Cultural Event Poster", client: "Sebfon Academy", year: 2025,
    brief: "A digital portrait-centric version of the Cultural Day event flyer, focusing on the students' traditional attire.",
    problem: "The client wanted a version that felt more 'human' and focused on the children participating.",
    challenges: "Removing backgrounds from diverse group photos and blending them into a cohesive green and white aesthetic.",
    solution: "Centered three high-energy student portraits in traditional gear with a vibrant green 'forest' glow to represent the Nigerian colors.",
    outcome: "This version became the primary poster for physical printouts around the school premises and digital dissemination due to its high visual energy." },

  { id: 23, slug: "sebfon-academy-cultural-day-banner", img: IMG_GALLERY23, title: "Sebfon Academy Cultural Day banner", category: "poster", type: "Educational Event Invitation", client: "Sebfon Canadian Academy", year: 2025,
    brief: "Sebfon Canadian Academy needed a vibrant, festive invitation for their first-ever Cultural Day event.",
    problem: "The flyer needed to represent 'culture' broadly without favoring one specific tribe, while listing many activities.",
    challenges: "Fitting a long list of features (talent hunts, drama, parade) alongside diverse cultural imagery.",
    solution: "Used a clean white center for the text to ensure readability, framed by traditional drums and colorful patterns at the top and bottom.",
    outcome: "The design successfully communicated the variety of the event, leading to a massive turnout of parents and students in traditional attire." },

  { id: 24, slug: "ziggy-world-business-services", img: IMG_GALLERY24, title: "Ziggy World Business Services", category: "poster", type: "Business Portfolio Flyer", client: "Ziggy World", year: 2025,
    brief: "Ziggy World needed a flyer to advertise their diverse range of services, from medical equipment to printing.",
    problem: "The business handles very different niches (books vs. medical scrubs); the design needed to look unified.",
    challenges: "Combining imagery of medical scrubs and school books in a way that doesn't look disorganized.",
    solution: "Used a deep blue professional background with color-coded info blocks and high-quality 3D renders of the products.",
    outcome: "The flyer clearly categorized the business offerings, helping customers understand that they could get both medical supplies and printing done at one location." },

  { id: 25, slug: "omg-graphics-hire-flyer", img: IMG_GALLERY25, title: "OMG Graphics Hire Flyer", category: "brand", type: "Agency Service Advertisement", client: "OMG Graphics", year: 2026,
    brief: "OMG Graphics needed a 'vibe-check' flyer to attract new clients by showcasing their creative tools and service list.",
    problem: "Designers' own flyers are often too experimental, making them hard for non-designers to read.",
    challenges: "Visualizing the 'creative process' while listing over eight specific design services.",
    solution: "Used a dark tech-themed top half with software icons (Ps, Ai) and a clean white bottom half for the service list to ensure high scannability.",
    outcome: "The 'Do You Need A Graphic Designer?' hook led to a 25% increase in cold inquiries from local small businesses." },

  { id: 26, slug: "promise-land-estate", img: IMG_GALLERY26, title: "Promise Land Estate", category: "brand", type: "Real Estate Marketing Flyer", client: "SkyRise Realty Ltd", year: 2025,
    brief: "Skyrise Realty needed to promote land plots in Adesagbon Community with a specific 'Free Trip of Sand' incentive.",
    problem: "Land sales in Nigeria are competitive; the offer (price and bonuses) needed to stand out immediately.",
    challenges: "Blending a blue-sky outdoor aesthetic with the corporate branding of the realty company.",
    solution: "High-visibility red and black text for the 'Promise Land' title and a dedicated bubble for the price list ($1.2M - $2M) for instant clarity.",
    outcome: "The 'Free Trip of Sand' highlight became a major talking point for leads, increasing conversion rates for the Benin-Auchi express road plots." },

  { id: 27, slug: "seychelles-tropical-gateway", img: IMG_GALLERY27, title: "Seychelles Tropical Gateway", category: "brand", type: "Travel & Tourism Flyer", client: "Kings Travels", year: 2026,
    brief: "Kings Travels commissioned a warm, tropical flyer to promote a multi-day group trip to the Seychelles islands.",
    problem: "Multiple package inclusions can make a flyer feel like a grocery list rather than an invitation to a luxury vacation.",
    challenges: "Combining a sunset resort view with cultural tour highlights while keeping the ₦2,600,000 pricing clear and attractive.",
    solution: "Framed the main resort view as the emotional hook, using circular thumbnails to visually represent the city tours and temple visits mentioned in the text.",
    outcome: "The flyer saw high engagement for the May 2026 travel window, successfully converting interested travelers via the integrated WhatsApp contact." },

  { id: 28, slug: "dreamland-gardens-promo", img: IMG_GALLERY28, title: "Dreamland Gardens Promo", category: "poster", type: "Sales Incentive Flyer", client: "SkyRise Realty Ltd", year: 2025,
    brief: "A high-impact promotional flyer for Skyrise Realty to push their ₦500k deposit plan for land.",
    problem: "The low deposit price needed to be the hero of the design to drive 'impulse' real estate inquiries.",
    challenges: "Making the price tag look 'valuable'—not cheap—while showcasing the potential of the land development.",
    solution: "Used a giant golden 'banner' tag to house the ₦500k figure, placing it centrally over a high-end architectural render.",
    outcome: "The '₦500k Deposit' became the most recognized part of the campaign, leading to high conversion for the Iguoviobo Community plots." },
];

  // ===== TESTIMONIALS DATA =====
  const testimonials = [
    {name:'Chidinma Okafor',role:'CEO, VelvetThreads Fashion',initial:'CO',stars:5,quote:"OMG Graphics transformed our brand completely. They didn\u2019t just design a logo \u2014 they gave us a full visual language that now makes us look like we belong on international runways. The attention to detail was extraordinary."},
    {name:'Emeka Nwosu',role:'Event Promoter, Lagos',initial:'EN',stars:5,quote:"Our event flyers used to look basic. After working with OMG, our promotions went viral organically. The designs understand our audience \u2014 they\u2019re bold, energetic, and unmissable. Bookings have never been better."},
    {name:'Adaeze Martins',role:'Founder, Spice Up Nigeria',initial:'AM',stars:5,quote:"I couldn\u2019t get my product into supermarkets with my old packaging. After the redesign, two major chains accepted us immediately. OMG doesn\u2019t just make things beautiful \u2014 they make things work."},
    {name:'Olumide Fashola',role:'Director, Lagos TechHub',initial:'OF',stars:5,quote:"Our social media engagement doubled because our content now looks world-class. OMG created a system that\u2019s easy for our team to use but always looks professionally designed. Absolute value for money."},
    {name:'Pastor Kemi Adeyemi',role:'Event Director, Grace Assembly',initial:'KA',stars:5,quote:"The quality of our event communications has never been higher. Our congregation and partners were genuinely impressed. OMG understood our vision and delivered something beyond what we imagined."},
    {name:'Funmi Adesanya',role:'Brand Manager, Afri-Natural',initial:'FA',stars:5,quote:"Export buyers specifically mentioned our packaging as a reason they stocked us. That\u2019s the power of great design. OMG helped us compete globally from Lagos. I recommend them to every brand serious about growth."}
  ];

  const marqueeItems = [
    {text:'Brand Identity',dot:'r'},{text:'Logo Design',dot:'y'},
    {text:'Flyer Design',dot:'b'},{text:'Poster Design',dot:'g'},
    {text:'Social Media Graphics',dot:'r'},{text:'Packaging Design',dot:'y'},
    {text:'Motion Graphics',dot:'b'},{text:'Typography',dot:'g'},
    {text:'Event Branding',dot:'r'},{text:'Digital Marketing',dot:'y'},
    {text:'Visual Identity',dot:'b'},{text:'Creative Direction',dot:'g'},
  ];

  // ===== BUILD MARQUEE =====
  function buildMarquee() {
    const track = document.getElementById('marqueeTrack');
    if (!track) return; // section not present on every page (e.g. project.php)
    let html = '';
    for (let r = 0; r < 4; r++) {
      marqueeItems.forEach(item => {
        html += `<span class="marquee-item"><span class="marquee-dot ${item.dot}"></span>${item.text}<span class="marquee-dot ${item.dot}"></span></span>`;
      });
    }
    track.innerHTML = html;
  }

  // ===== BUILD PORTFOLIO =====
  // Card anatomy matches the OMG Tech Hub portfolio: image (4:3) + a content
  // panel below with category pill, title, and "Client · Year" line. The
  // whole card links to project.php?slug=... — its own real page — instead
  // of opening the old hover-overlay/modal.
  const CATEGORY_LABELS = { brand: 'Brand Identity', poster: 'Posters & Flyers', social: 'Social Media', birthday: 'Birthday' };

  // Same rotate/flip/tilt/spring animation set used on OMG Tech Hub's
  // portfolio grid. Each card's variant is a stable hash of its own slug —
  // NOT its position in the array — so prepending an admin-uploaded project
  // ahead of the list never reassigns an already-settled card to a
  // different variant mid-flight (that reassignment was the exact bug fixed
  // on the Tech Hub site: an already-visible card given a new transform
  // target gets caught mid-transition, ending up stuck at a skewed angle).
  const VARIANT_CYCLE = ['flipY', 'bounce', 'flipX', 'rotateIn', 'tiltLeft', 'tiltRight', 'scaleIn', 'popIn', 'swingIn', 'slideLeft', 'slideRight', 'springUp'];
  function hashSlug(slug) {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
    return Math.abs(hash);
  }

  function buildPortfolio(filter) {
    filter = filter || 'all';
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return; // section not present on every page (e.g. project.php)
    const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === filter);
    grid.innerHTML = filtered.map((item, idx) => {
      const variant = VARIANT_CYCLE[hashSlug(item.slug) % VARIANT_CYCLE.length];
      return `
      <a class="portfolio-card reveal-${variant}" href="project.php?slug=${encodeURIComponent(item.slug)}" style="transition-delay:${Math.min(idx, 7) * 0.06}s">
        <div class="portfolio-card-media">
          <img src="${item.img}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="portfolio-card-body">
          <span class="portfolio-card-tag">${CATEGORY_LABELS[item.category] || item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.client || ''}${item.client && item.year ? ' · ' : ''}${item.year || ''}</p>
        </div>
      </a>
    `;
    }).join('');
    observeReveal();
    refreshCursorListeners();
  }

  // ===== MERGE ADMIN-UPLOADED PROJECTS =====
  // Vanilla-JS equivalent of the Tech Hub React `usePortfolio` hook: fetch
  // anything uploaded through admin/upload_portfolio.php and place it ahead
  // of the static list (newest upload first), skipping any slug collision.
  function mergeUploadedProjects() {
    fetch('api/portfolio.php')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data || !data.ok || !data.projects || !data.projects.length) return;
        const existingSlugs = new Set(portfolioItems.map(i => i.slug));
        const uploaded = data.projects
          .filter(p => p.slug && !existingSlugs.has(p.slug))
          .map(p => ({ ...p, img: p.image })); // API field is `image`; cards render `item.img`
        if (!uploaded.length) return;
        portfolioItems.unshift(...uploaded);
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        buildPortfolio(activeFilter);
      })
      .catch(() => {});
  }

  // ===== BUILD TESTIMONIALS =====
  // Testimonials are a fixed, never-reordered list, so cycling variants by
  // index (unlike the portfolio grid) is safe here.
  const TESTIMONIAL_VARIANT_CYCLE = ['flipX', 'tiltRight', 'scaleIn', 'tiltLeft', 'popIn', 'flipY'];
  function buildTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return; // section not present on every page (e.g. project.php)
    grid.innerHTML = testimonials.map((t, i) => `
      <div class="testimonial-card reveal-${TESTIMONIAL_VARIANT_CYCLE[i % TESTIMONIAL_VARIANT_CYCLE.length]}" style="transition-delay:${i * 0.1}s">
        <div class="testimonial-stars">${'\u2605'.repeat(t.stars)}</div>
        <p class="testimonial-quote">${t.quote}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.initial}</div>
          <div>
            <div class="author-name">${t.name}</div>
            <div class="author-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // ===== SHARE =====
  function shareItem(id) {
    const item = portfolioItems.find(i => i.id === id);
    if (!item) return;
    if (navigator.share) {
      navigator.share({ title: item.title, text: 'Check out this design by OMG Graphics', url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => alert('Link copied!'));
    }
  }

  // ===== LIGHTBOX STATE =====
let lightboxItems = [];
let currentLightboxIndex = 0;

window.openFullscreen = function(imgSrc, title) {
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const filtered = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === activeFilter);

  lightboxItems = filtered.map(i => ({ img: i.img, title: i.title }));

  currentLightboxIndex = lightboxItems.findIndex(i => i.img === imgSrc);
  if (currentLightboxIndex === -1) currentLightboxIndex = 0;

  _setLightboxImage();
  const lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  const lb = document.getElementById('lightbox');
  lb.style.display = '';
  lb.classList.remove('open');
  document.body.style.overflow = '';
};

window.navigateLightbox = function(direction) {
  const newIndex = currentLightboxIndex + direction;
  if (newIndex < 0 || newIndex >= lightboxItems.length) return;
  const img = document.getElementById('lightbox-img');
  img.classList.add('fading');
  setTimeout(() => {
    currentLightboxIndex = newIndex;
    _setLightboxImage();
    img.classList.remove('fading');
  }, 200);
};

function _setLightboxImage() {
  const item = lightboxItems[currentLightboxIndex];
  if (!item) return;
  const img = document.getElementById('lightbox-img');
  img.src = item.img;
  img.alt = item.title;
  document.getElementById('lightbox-prev').disabled = currentLightboxIndex === 0;
  document.getElementById('lightbox-next').disabled = currentLightboxIndex === lightboxItems.length - 1;
}

const lightboxEl = document.getElementById('lightbox');
if (lightboxEl) {
  lightboxEl.addEventListener('click', function(e) {
    if (e.target === this) window.closeLightbox();
  });
}

document.addEventListener('keydown', function(e) {
  if (!lightboxEl || !lightboxEl.classList.contains('open')) return;
  if (e.key === 'Escape')     window.closeLightbox();
  if (e.key === 'ArrowLeft')  window.navigateLightbox(-1);
  if (e.key === 'ArrowRight') window.navigateLightbox(1);
});

  // ===== MODAL =====
  function openModal(id) {
    const item = portfolioItems.find(i => i.id === id);
    if (!item) return;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalBody').innerHTML = `
      <div class="modal-image"><img src="${item.img}" alt="${item.title}" /></div>
      <div class="process-step">
        <div class="process-step-label">The Brief</div>
        <h4>Client Brief &amp; Vision</h4>
        <p>${item.brief}</p>
      </div>
      <div class="process-step yellow">
        <div class="process-step-label">The Problem</div>
        <h4>Problem to Solve</h4>
        <p>${item.problem}</p>
      </div>
      <div class="process-step blue">
        <div class="process-step-label">The Challenges</div>
        <h4>Obstacles Along the Way</h4>
        <p>${item.challenges}</p>
      </div>
      <div class="process-step green">
        <div class="process-step-label">The Solution</div>
        <h4>How We Solved It</h4>
        <p>${item.solution}</p>
      </div>
      <div class="process-step">
        <div class="process-step-label">The Outcome</div>
        <h4>Results &amp; Impact</h4>
        <p>${item.outcome}</p>
      </div>
      <div class="modal-actions">
        <a href="${item.img}" download="${item.title}.jpg" class="btn-primary"><i class="fa-solid fa-download"></i> Download Design</a>
        <button onclick="openFullscreen('${item.img}', '${item.title}')" class="btn-outline"><i class="fa-solid fa-expand"></i> View Full Size</button>
      </div>
    `;
    document.getElementById('processModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('processModal').classList.remove('open');
    document.body.style.overflow = '';
  }
  const processModalEl = document.getElementById('processModal');
  if (processModalEl) {
    processModalEl.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
  }

  // ===== FILTER BUTTONS =====
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      buildPortfolio(this.dataset.filter);
    });
  });

  // ===== THEME TOGGLE =====
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  });

  // ===== HAMBURGER =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  // ===== CURSOR =====
  const cursorEl = document.getElementById('cursor');
  const cursorFollowerEl = document.getElementById('cursor-follower');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let followerX = mouseX, followerY = mouseY;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursorEl.style.left = e.clientX + 'px';
    cursorEl.style.top = e.clientY + 'px';
  });
  (function animateCursor() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollowerEl.style.left = followerX + 'px';
    cursorFollowerEl.style.top = followerY + 'px';
    requestAnimationFrame(animateCursor);
  })();

  // ===== REVEAL ON SCROLL =====
  function observeReveal() {
    // Matches every reveal variant (.reveal, .reveal-left/-right/-scale, and
    // the expanded .reveal-<variant> set in css/omg.css) without needing to
    // enumerate each class name here.
    const els = document.querySelectorAll('[class*="reveal"]:not(.visible)');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        obs.unobserve(el);
        // will-change is applied only for the duration of this element's own
        // transition (added right before it starts, removed once it ends)
        // rather than left on permanently — leaving it on every reveal
        // element at once forces the browser to keep dozens of compositor
        // layers promoted simultaneously while scrolling, which is what was
        // causing cards to visibly lag/"hook" instead of animating smoothly.
        el.style.willChange = 'transform, opacity';
        const clearWillChange = () => { el.style.willChange = ''; el.removeEventListener('transitionend', clearWillChange); };
        el.addEventListener('transitionend', clearWillChange);
        setTimeout(clearWillChange, 1200); // safety net if transitionend never fires
        el.classList.add('visible');
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
  }

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, target, duration) {
    duration = duration || 1800;
    const step = timestamp => {
      if (!step.startTime) step.startTime = timestamp;
      const progress = Math.min((timestamp - step.startTime) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter(document.getElementById('counter1'), 98);
      animateCounter(document.getElementById('counter2'), 50);
      animateCounter(document.getElementById('counter3'), 200);
      animateCounter(document.getElementById('counter4'), 5);
      statsObs.disconnect();
    }
  }, { threshold: 0.3 });
  const statsEl = document.getElementById('stats');
  if (statsEl) statsObs.observe(statsEl); // section not present on every page (e.g. project.php)

  // ===== CURSOR HOVER REFRESH =====
  function onEnter() { cursorEl.classList.add('active'); cursorFollowerEl.classList.add('active'); }
  function onLeave() { cursorEl.classList.remove('active'); cursorFollowerEl.classList.remove('active'); }
  function refreshCursorListeners() {
    document.querySelectorAll('a, button, .portfolio-card, .social-link, .filter-btn, .action-btn, .view-process-btn, .stat-card, .testimonial-card').forEach(el => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  // ===== DARK CANVAS - ANIMATED STARS =====
  (function initDarkCanvas() {
    const canvas = document.getElementById('dark-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, stars = [], shootingStars = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    function Star() {
      this.reset = function() {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.r = Math.random() * 1.6 + 0.2;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.dx = (Math.random() - 0.5) * 0.3;
        this.dy = Math.random() * 0.12 + 0.02;
        this.twinkle = Math.random() * Math.PI * 2;
        this.twinkleSpeed = Math.random() * 0.04 + 0.01;
        this.color = Math.random() < 0.03 ? '#FFD600' : Math.random() < 0.02 ? '#E8192C' : '#FFFFFF';
      };
      this.reset(); this.y = Math.random() * H;
    }
    function ShootingStar() {
      this.reset = function() {
        this.x = Math.random() * W; this.y = Math.random() * H * 0.5;
        this.len = Math.random() * 120 + 60; this.speed = Math.random() * 8 + 5;
        this.opacity = 1; this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
        this.active = false; this.timer = Math.random() * 300 + 150;
      };
      this.reset();
    }
    function initStars() {
      stars = []; for (let i = 0; i < 280; i++) stars.push(new Star());
      shootingStars = []; for (let i = 0; i < 4; i++) shootingStars.push(new ShootingStar());
    }
    function draw() {
      if (document.documentElement.getAttribute('data-theme') !== 'dark') { requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      const grad = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, Math.max(W, H) * 0.8);
      grad.addColorStop(0, 'rgba(15,10,30,1)'); grad.addColorStop(0.5, 'rgba(8,5,18,1)'); grad.addColorStop(1, 'rgba(4,4,8,1)');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
      [['rgba(232,25,44,0.035)',0.3,0.3],['rgba(255,214,0,0.025)',0.7,0.2],['rgba(26,107,204,0.03)',0.5,0.7]].forEach(([c,ox,oy]) => {
        const ng = ctx.createRadialGradient(W*ox,H*oy,0,W*ox,H*oy,W*0.4);
        ng.addColorStop(0,c); ng.addColorStop(1,'transparent'); ctx.fillStyle=ng; ctx.fillRect(0,0,W,H);
      });
      stars.forEach(s => {
        s.twinkle += s.twinkleSpeed;
        const tf = 0.5 + 0.5 * Math.sin(s.twinkle);
        ctx.globalAlpha = s.opacity * tf; ctx.fillStyle = s.color;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * (0.8 + 0.2*tf), 0, Math.PI*2); ctx.fill();
        if (s.r > 1.2) { ctx.globalAlpha = s.opacity*tf*0.25; ctx.beginPath(); ctx.arc(s.x,s.y,s.r*2.5,0,Math.PI*2); ctx.fill(); }
        s.x += s.dx; s.y += s.dy;
        if (s.y > H + 2) { s.reset(); s.y = -2; }
        if (s.x < -2) s.x = W+2; if (s.x > W+2) s.x = -2;
      });
      shootingStars.forEach(ss => {
        if (!ss.active) { ss.timer--; if (ss.timer <= 0) { ss.active = true; ss.opacity = 1; } return; }
        const tx = Math.cos(ss.angle)*ss.speed, ty = Math.sin(ss.angle)*ss.speed;
        const g2 = ctx.createLinearGradient(ss.x,ss.y,ss.x-tx*(ss.len/ss.speed),ss.y-ty*(ss.len/ss.speed));
        g2.addColorStop(0,`rgba(255,255,255,${ss.opacity})`); g2.addColorStop(1,'rgba(255,255,255,0)');
        ctx.globalAlpha=1; ctx.strokeStyle=g2; ctx.lineWidth=1.5;
        ctx.beginPath(); ctx.moveTo(ss.x,ss.y); ctx.lineTo(ss.x-tx*(ss.len/ss.speed),ss.y-ty*(ss.len/ss.speed)); ctx.stroke();
        ss.x+=tx; ss.y+=ty; ss.opacity-=0.015;
        if (ss.opacity<=0||ss.x>W||ss.y>H) ss.reset();
      });
      ctx.globalAlpha=1; requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { resize(); initStars(); });
    resize(); initStars(); draw();
  })();

  // ===== LIGHT CANVAS - FLOATING ELEMENTS =====
  (function initLightCanvas() {
    const canvas = document.getElementById('light-canvas');
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    const colors = ['rgba(232,25,44,','rgba(255,214,0,','rgba(26,107,204,','rgba(29,166,74,'];
    const shapes = ['circle','triangle','square','diamond','ring'];
    function Particle() {
      this.reset = function() {
        this.x = Math.random()*W; this.y = Math.random()*H;
        this.size = Math.random()*18+4;
        this.shape = shapes[Math.floor(Math.random()*shapes.length)];
        this.color = colors[Math.floor(Math.random()*colors.length)];
        this.opacity = Math.random()*0.12+0.03;
        this.dx = (Math.random()-0.5)*0.6; this.dy = (Math.random()-0.5)*0.6;
        this.rotation = Math.random()*Math.PI*2; this.rotSpeed = (Math.random()-0.5)*0.02;
        this.pulse = Math.random()*Math.PI*2; this.pulseSpeed = Math.random()*0.03+0.01;
      }; this.reset();
    }
    function initParticles() { particles = []; for (let i=0;i<60;i++) particles.push(new Particle()); }
    function drawShape(p) {
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
      p.pulse += p.pulseSpeed;
      const pf = 0.85+0.15*Math.sin(p.pulse), s = p.size*pf;
      ctx.globalAlpha = p.opacity; ctx.fillStyle = p.color+p.opacity+')';
      ctx.strokeStyle = p.color+(p.opacity*2)+')'; ctx.lineWidth=1.5;
      if (p.shape==='circle') { ctx.beginPath(); ctx.arc(0,0,s/2,0,Math.PI*2); ctx.fill(); }
      else if (p.shape==='ring') { ctx.beginPath(); ctx.arc(0,0,s/2,0,Math.PI*2); ctx.globalAlpha=p.opacity*1.5; ctx.stroke(); }
      else if (p.shape==='triangle') { ctx.beginPath(); ctx.moveTo(0,-s/2); ctx.lineTo(s/2,s/2); ctx.lineTo(-s/2,s/2); ctx.closePath(); ctx.fill(); }
      else if (p.shape==='square') { ctx.fillRect(-s/2,-s/2,s,s); }
      else if (p.shape==='diamond') { ctx.beginPath(); ctx.moveTo(0,-s/2); ctx.lineTo(s/2,0); ctx.lineTo(0,s/2); ctx.lineTo(-s/2,0); ctx.closePath(); ctx.fill(); }
      ctx.restore();
    }
    function draw() {
      if (document.documentElement.getAttribute('data-theme') === 'dark') { requestAnimationFrame(draw); return; }
      ctx.clearRect(0,0,W,H);
      const grad = ctx.createLinearGradient(0,0,W,H);
      grad.addColorStop(0,'rgba(245,242,236,1)'); grad.addColorStop(0.5,'rgba(255,248,235,1)'); grad.addColorStop(1,'rgba(237,233,224,1)');
      ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
      [['rgba(232,25,44,0.04)',0.15,0.2],['rgba(255,214,0,0.05)',0.8,0.3],['rgba(26,107,204,0.04)',0.4,0.7]].forEach(([c,ox,oy]) => {
        const lg=ctx.createRadialGradient(W*ox,H*oy,0,W*ox,H*oy,W*0.5);
        lg.addColorStop(0,c); lg.addColorStop(1,'transparent'); ctx.fillStyle=lg; ctx.fillRect(0,0,W,H);
      });
      particles.forEach(p => {
        drawShape(p); p.x+=p.dx; p.y+=p.dy; p.rotation+=p.rotSpeed;
        if(p.x<-30) p.x=W+30; if(p.x>W+30) p.x=-30;
        if(p.y<-30) p.y=H+30; if(p.y>H+30) p.y=-30;
      });
      ctx.globalAlpha=1; requestAnimationFrame(draw);
    }
    window.addEventListener('resize', () => { resize(); initParticles(); });
    resize(); initParticles(); draw();
  })();

  // ===== INIT =====
  buildMarquee();
  buildPortfolio();
  mergeUploadedProjects();
  buildTestimonials();
  observeReveal();
  refreshCursorListeners();
