/* =========================================================
   NIPUNIKA WEERAVANSHA — MOBILE RESPONSIVE FIX
   Replace your current style.css with this version
   ========================================================= */

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
    --bg: #07070b;
    --bg-soft: #0d0d13;
    --card: #111119;
    --card-light: #171720;
    --text: #f7f7fb;
    --muted: #a5a5b3;
    --muted-2: #70707e;
    --line: rgba(255,255,255,.09);
    --purple: #8b5cf6;
    --purple-light: #b58cff;
    --pink: #ec4899;
    --blue: #38bdf8;
    --radius: 24px;
    --container: 1180px;
    --sans: "DM Sans", sans-serif;
    --display: "Space Grotesk", sans-serif;
}

/* =========================================================
   RESET
   ========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    background:
        radial-gradient(
            circle at 50% -10%,
            rgba(139,92,246,.10),
            transparent 35%
        ),
        var(--bg);
    color: var(--text);
    font-family: var(--sans);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
    isolation: isolate;
}

img {
    display: block;
    max-width: 100%;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}

::selection {
    background: var(--purple);
    color: white;
}

/* =========================================================
   BACKGROUND
   ========================================================= */

body::before {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background-image:
        linear-gradient(
            rgba(255,255,255,.045) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,.045) 1px,
            transparent 1px
        );

    background-size: 55px 55px;

    mask-image:
        radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0,0,0,.85) 48%,
            transparent 88%
        );

    -webkit-mask-image:
        radial-gradient(
            ellipse at center,
            black 0%,
            rgba(0,0,0,.85) 48%,
            transparent 88%
        );

    opacity: .65;
}

body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background:
        radial-gradient(
            circle at 50% 15%,
            rgba(139,92,246,.07),
            transparent 32%
        ),
        radial-gradient(
            circle at 85% 75%,
            rgba(236,72,153,.035),
            transparent 28%
        );

    opacity: .9;
}

/* =========================================================
   SCROLLBAR
   ========================================================= */

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #050507;
}

::-webkit-scrollbar-thumb {
    background: #292936;
    border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--purple);
}

/* =========================================================
   GLOWS
   ========================================================= */

.bg-glow {
    position: fixed;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    opacity: .12;
    z-index: -2;
}

.glow-one {
    top: -200px;
    left: -180px;
    background: var(--purple);
}

.glow-two {
    top: 45%;
    right: -250px;
    background: var(--pink);
}

/* =========================================================
   NAVBAR
   ========================================================= */

.navbar {
    width: min(var(--container), calc(100% - 40px));
    height: 76px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;
    z-index: 1000;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    color: #fff;
    font-family: var(--display);
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
}

.logo-mark {
    width: 36px;
    height: 36px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(139,92,246,.5);
    border-radius: 10px;

    background: rgba(139,92,246,.12);
    color: #fff;

    font-size: 16px;
    font-weight: 700;

    box-shadow:
        0 0 25px rgba(139,92,246,.18);

    transition: .3s ease;
}

.logo:hover .logo-mark {
    transform: rotate(-5deg) scale(1.05);
    border-color: rgba(139,92,246,.8);
}

.desktop-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;

    margin-left: auto;
    margin-right: 28px;
}

.desktop-nav a {
    position: relative;

    color: var(--muted);
    font-size: 14px;
    font-weight: 500;

    padding: 8px 0;

    transition:
        color .3s ease,
        transform .3s ease;
}

.desktop-nav a::after {
    content: "";
    position: absolute;

    left: 50%;
    bottom: 0;

    width: 0;
    height: 2px;

    transform: translateX(-50%);

    border-radius: 10px;
    background: var(--purple-light);

    transition: width .3s ease;
}

.desktop-nav a:hover,
.desktop-nav a.active {
    color: #fff;
}

.desktop-nav a:hover::after,
.desktop-nav a.active::after {
    width: 100%;
}

.nav-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    padding: 10px 17px;

    border: 1px solid var(--line);
    border-radius: 100px;

    color: #fff;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;

    background: rgba(255,255,255,.02);

    transition:
        border-color .3s ease,
        background .3s ease,
        transform .3s ease;
}

.nav-button:hover {
    border-color: rgba(139,92,246,.6);
    background: rgba(139,92,246,.1);
    transform: translateY(-2px);
}

.menu-button {
    display: none;

    width: 42px;
    height: 42px;

    border: 1px solid var(--line);
    border-radius: 10px;

    background: rgba(255,255,255,.03);
    color: #fff;

    font-size: 20px;
    cursor: pointer;

    transition: .3s ease;
}

.menu-button:hover {
    border-color: rgba(139,92,246,.6);
    background: rgba(139,92,246,.1);
}

/* =========================================================
   MOBILE MENU
   ========================================================= */

.mobile-menu {
    display: none;

    position: fixed;

    top: 76px;
    left: 20px;
    right: 20px;

    padding: 18px;

    background: rgba(15,15,22,.97);
    backdrop-filter: blur(20px);

    border: 1px solid var(--line);
    border-radius: 20px;

    z-index: 999;

    box-shadow:
        0 20px 60px rgba(0,0,0,.5);
}

.mobile-menu.active {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.mobile-menu a {
    padding: 13px 15px;

    border-radius: 12px;

    color: var(--muted);

    transition: .25s ease;
}

.mobile-menu a:hover {
    background: rgba(139,92,246,.1);
    color: white;
}

/* =========================================================
   HERO
   ========================================================= */

.hero {
    width: min(var(--container), calc(100% - 40px));

    min-height: calc(100vh - 76px);

    margin: 0 auto;

    padding: 80px 0 110px;

    display: grid;
    grid-template-columns: 1.05fr .95fr;

    align-items: center;

    gap: 70px;

    position: relative;
}

.hero-content {
    position: relative;
    z-index: 3;
}

.hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: var(--purple-light);

    font-size: 11px;
    font-weight: 700;
    letter-spacing: .2em;

    margin-bottom: 22px;
}

.hero-tag::before {
    content: "";

    width: 25px;
    height: 1px;

    background: var(--purple-light);
}

.hero h1 {
    font-family: var(--display);

    font-size: clamp(55px, 7vw, 94px);

    line-height: .95;

    letter-spacing: -.07em;
    font-weight: 700;
}

.hero h1 span {
    background:
        linear-gradient(
            110deg,
            #fff,
            var(--purple-light),
            var(--pink)
        );

    -webkit-background-clip: text;
    background-clip: text;

    color: transparent;

    background-size: 200% auto;

    animation: gradientText 5s linear infinite;
}

@keyframes gradientText {
    0% {
        background-position: 0% center;
    }

    100% {
        background-position: 200% center;
    }
}

.hero h2 {
    margin-top: 24px;

    max-width: 600px;

    font-family: var(--display);

    font-size: clamp(24px, 3vw, 38px);

    line-height: 1.15;

    letter-spacing: -.04em;

    font-weight: 500;
}

.hero-description {
    max-width: 570px;

    margin-top: 22px;

    color: var(--muted);

    font-size: 16px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    margin-top: 32px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 13px 20px;

    border-radius: 100px;

    font-size: 13px;
    font-weight: 700;

    border: 1px solid var(--line);

    transition:
        transform .3s ease,
        box-shadow .3s ease,
        background .3s ease,
        border .3s ease;
}

.btn:hover {
    transform: translateY(-3px);
}

.primary-btn,
.btn.primary {
    background:
        linear-gradient(
            135deg,
            var(--purple),
            #7045db
        );

    border-color: transparent;

    box-shadow:
        0 10px 35px rgba(139,92,246,.25);
}

.primary-btn:hover,
.btn.primary:hover {
    box-shadow:
        0 15px 45px rgba(139,92,246,.42);
}

.secondary-btn {
    background: rgba(255,255,255,.035);
}

.secondary-btn:hover {
    background: rgba(255,255,255,.07);
    border-color: rgba(255,255,255,.18);
}

.hero-socials {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-top: 32px;
}

.hero-socials a {
    color: var(--muted-2);
    font-size: 12px;

    transition: .3s ease;
}

.hero-socials a:hover {
    color: white;
}

/* =========================================================
   HERO IMAGE
   ========================================================= */

.hero-image {
    min-height: 560px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    min-width: 0;
}

.image-glow {
    position: absolute;

    width: 380px;
    height: 380px;

    border-radius: 50%;

    background:
        radial-gradient(
            circle,
            rgba(139,92,246,.5),
            rgba(236,72,153,.15) 45%,
            transparent 70%
        );

    filter: blur(18px);

    animation:
        heroGlow 5s ease-in-out infinite;
}

@keyframes heroGlow {
    0%, 100% {
        transform: scale(.92);
        opacity: .7;
    }

    50% {
        transform: scale(1.08);
        opacity: 1;
    }
}

.hero-image::before,
.hero-image::after {
    content: "";

    position: absolute;

    border-radius: 50%;

    pointer-events: none;
}

.hero-image::before {
    width: 460px;
    height: 460px;

    border: 1px solid rgba(139,92,246,.20);

    animation:
        rotateRing 18s linear infinite;
}

.hero-image::after {
    width: 520px;
    height: 520px;

    border: 1px dashed rgba(255,255,255,.09);

    animation:
        rotateRingReverse 28s linear infinite;
}

@keyframes rotateRing {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes rotateRingReverse {
    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}

.profile-frame {
    width: min(390px, 78vw);

    aspect-ratio: 1 / 1;

    position: relative;
    z-index: 2;

    padding: 9px;

    border-radius: 50%;

    background:
        conic-gradient(
            from 0deg,
            var(--purple),
            var(--pink),
            var(--blue),
            var(--purple)
        );

    animation:
        profileFloat 6s ease-in-out infinite;

    box-shadow:
        0 0 50px rgba(139,92,246,.25),
        0 0 100px rgba(236,72,153,.12);
}

.profile-frame::before {
    content: "";

    position: absolute;

    inset: 4px;

    border-radius: 50%;

    background: var(--bg);

    z-index: -1;
}

.profile-frame img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    border-radius: 50%;

    border: 4px solid #09090e;

    filter:
        saturate(1.05)
        contrast(1.03);

    transition:
        transform .6s ease;
}

.profile-frame:hover img {
    transform: scale(1.04);
}

@keyframes profileFloat {
    0%, 100% {
        transform:
            translateY(0)
            rotate(-1deg);
    }

    50% {
        transform:
            translateY(-14px)
            rotate(1deg);
    }
}

.floating-card {
    position: absolute;

    z-index: 5;

    padding: 12px 16px;

    display: flex;
    align-items: center;

    gap: 9px;

    border: 1px solid rgba(255,255,255,.11);

    background: rgba(13,13,19,.78);

    backdrop-filter: blur(18px);

    border-radius: 14px;

    color: #ddd;

    font-size: 12px;
    font-weight: 600;

    box-shadow:
        0 15px 45px rgba(0,0,0,.35);
}

.floating-card span {
    color: var(--purple-light);
    font-size: 17px;
}

.card-one {
    left: 0;
    top: 30%;

    animation:
        floatOne 5s ease-in-out infinite;
}

.card-two {
    right: -5px;
    bottom: 25%;

    animation:
        floatTwo 5.5s ease-in-out infinite;
}

@keyframes floatOne {
    0%, 100% {
        transform: translate(0,0);
    }

    50% {
        transform: translate(-8px,-15px);
    }
}

@keyframes floatTwo {
    0%, 100% {
        transform: translate(0,0);
    }

    50% {
        transform: translate(8px,14px);
    }
}

/* =========================================================
   TICKER
   ========================================================= */

.ticker {
    width: 100%;
    overflow: hidden;

    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    background: rgba(255,255,255,.015);

    padding: 17px 0;
}

.ticker-track {
    width: max-content;

    display: flex;
    align-items: center;

    gap: 30px;

    animation:
        tickerMove 25s linear infinite;
}

.ticker span {
    font-family: var(--display);

    font-size: 12px;

    letter-spacing: .18em;

    white-space: nowrap;

    color: #aaa;
}

.ticker b {
    color: var(--purple-light);
    font-size: 14px;
}

@keyframes tickerMove {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

/* =========================================================
   SECTIONS
   ========================================================= */

.section {
    padding: 130px 0;
    position: relative;
}

.section-width {
    width: min(var(--container), calc(100% - 40px));
    margin-left: auto;
    margin-right: auto;
}

.section-label {
    color: var(--muted-2);

    font-size: 11px;
    font-weight: 700;

    letter-spacing: .18em;

    padding-bottom: 18px;

    border-bottom: 1px solid var(--line);

    margin-bottom: 65px;
}

.reveal {
    opacity: 1;
    transform: translateY(0);
}

/* =========================================================
   ABOUT
   ========================================================= */

.about-grid {
    display: grid;

    grid-template-columns: .9fr 1.1fr;

    gap: 100px;
}

.about-grid small {
    color: var(--purple-light);

    font-size: 11px;

    letter-spacing: .16em;

    font-weight: 700;
}

.about-grid h2 {
    margin-top: 22px;

    font-family: var(--display);

    font-size: clamp(48px, 6vw, 75px);

    line-height: .98;

    letter-spacing: -.06em;
}

.about-grid h2 span {
    color: var(--purple-light);
}

.about-content {
    padding-top: 5px;
}

.large-text {
    font-size: 25px;

    line-height: 1.45;

    color: #ddd;

    margin-bottom: 30px;
}

.large-text strong {
    color: white;
}

.about-content > p:not(.large-text) {
    color: var(--muted);

    margin-bottom: 18px;

    max-width: 650px;
}

.tags {
    display: flex;

    flex-wrap: wrap;

    gap: 8px;

    margin-top: 30px;
}

.tags span {
    padding: 8px 12px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: #bdbdc8;

    font-size: 11px;
}

/* =========================================================
   HEADINGS
   ========================================================= */

.section-heading {
    display: grid;

    grid-template-columns: 1fr .65fr;

    gap: 50px;

    align-items: end;

    margin-bottom: 55px;
}

.section-heading h2,
.web-intro h2 {
    font-family: var(--display);

    font-size: clamp(50px, 6vw, 76px);

    line-height: .95;

    letter-spacing: -.06em;
}

.section-heading h2 span,
.web-intro h2 span {
    color: var(--purple-light);
}

.section-heading p {
    color: var(--muted);

    max-width: 400px;

    font-size: 14px;

    line-height: 1.8;
}

/* =========================================================
   GALLERY
   ========================================================= */

.gallery {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;
}

.wallpaper {
    display: block;
    min-width: 0;
}

.wallpaper-image {
    position: relative;

    overflow: hidden;

    border-radius: 20px;

    background: #111;

    aspect-ratio: 4 / 5;

    border: 1px solid var(--line);
}

.wallpaper-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition:
        transform .7s cubic-bezier(.2,.8,.2,1),
        filter .5s ease;
}

.wallpaper:hover .wallpaper-image img {
    transform: scale(1.07);
    filter: brightness(.72);
}

.art-number {
    position: absolute;

    top: 15px;
    left: 15px;

    width: 36px;
    height: 36px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: rgba(0,0,0,.55);

    backdrop-filter: blur(10px);

    font-size: 11px;

    z-index: 2;
}

.wallpaper-hover {
    position: absolute;

    inset: 0;

    display: flex;

    align-items: flex-end;

    justify-content: space-between;

    padding: 22px;

    opacity: 0;

    background:
        linear-gradient(
            to top,
            rgba(0,0,0,.7),
            transparent 60%
        );

    transition: .4s ease;
}

.wallpaper:hover .wallpaper-hover {
    opacity: 1;
}

.wallpaper-hover small {
    display: block;

    color: var(--purple-light);

    font-size: 9px;

    letter-spacing: .15em;

    font-weight: 700;
}

.wallpaper-hover span {
    display: block;

    margin-top: 4px;

    font-size: 14px;
}

.wallpaper-hover strong {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: white;
    color: black;
}

.wallpaper-info {
    display: flex;

    gap: 15px;

    padding: 17px 3px 0;
}

.wallpaper-info > span {
    color: var(--purple-light);

    font-size: 10px;
    font-weight: 700;
}

.wallpaper-info h3 {
    font-family: var(--display);

    font-size: 16px;

    font-weight: 600;
}

.wallpaper-info small {
    color: var(--muted-2);

    font-size: 11px;
}

.artwork-footer {
    margin-top: 55px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;

    padding-top: 30px;

    border-top: 1px solid var(--line);
}

.artwork-footer span {
    display: block;

    color: var(--muted-2);

    font-size: 9px;

    letter-spacing: .16em;

    font-weight: 700;
}

.artwork-footer strong {
    display: block;

    margin-top: 5px;

    font-family: var(--display);

    font-size: 18px;
}

/* =========================================================
   WEB DESIGN
   ========================================================= */

.web-intro {
    display: grid;

    grid-template-columns: 1fr .6fr;

    align-items: end;

    gap: 60px;

    margin-bottom: 65px;
}

.web-intro p {
    color: var(--muted);

    max-width: 400px;

    font-size: 14px;

    line-height: 1.8;
}

.browser {
    overflow: hidden;

    border-radius: 25px;

    border: 1px solid var(--line);

    background: #0d0d13;

    box-shadow:
        0 30px 90px rgba(0,0,0,.35);
}

.browser-bar {
    height: 50px;

    display: grid;

    grid-template-columns: 1fr auto 1fr;

    align-items: center;

    padding: 0 18px;

    border-bottom: 1px solid var(--line);

    color: var(--muted-2);

    font-size: 11px;
}

.browser-bar > span:last-child {
    justify-self: end;
}

.browser-dots {
    display: flex;
    gap: 6px;
}

.browser-dots i {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #444;
}

.browser-content {
    min-height: 390px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    padding: 65px;

    position: relative;

    overflow: hidden;

    background:
        radial-gradient(
            circle at 70% 40%,
            rgba(139,92,246,.18),
            transparent 40%
        );
}

.browser-content small {
    color: var(--purple-light);

    font-size: 10px;

    letter-spacing: .16em;

    font-weight: 700;
}

.browser-content h3 {
    margin: 15px 0 25px;

    font-family: var(--display);

    font-size: clamp(50px, 6vw, 80px);

    line-height: .9;

    letter-spacing: -.07em;
}

.browser-content h3 span {
    color: var(--purple-light);
}

.mini-button {
    display: inline-block;

    padding: 9px 13px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--muted);

    font-size: 10px;
}

.browser-art {
    height: 100%;

    min-height: 270px;

    position: relative;
}

.browser-shape {
    position: absolute;

    border-radius: 40%;

    animation:
        shapeFloat 6s ease-in-out infinite;
}

.shape-a {
    width: 260px;
    height: 260px;

    right: 15%;
    top: 5%;

    background:
        linear-gradient(
            135deg,
            var(--purple),
            var(--pink)
        );

    transform: rotate(25deg);

    box-shadow:
        0 0 80px rgba(139,92,246,.35);
}

.shape-b {
    width: 130px;
    height: 130px;

    right: 0;
    bottom: 5%;

    background:
        linear-gradient(
            135deg,
            var(--blue),
            var(--purple)
        );

    transform: rotate(-20deg);

    animation-delay: -2s;
}

@keyframes shapeFloat {
    0%, 100% {
        transform:
            translateY(0)
            rotate(25deg);
    }

    50% {
        transform:
            translateY(-20px)
            rotate(32deg);
    }
}

.skills {
    display: grid;

    grid-template-columns:
        repeat(4, minmax(0, 1fr));

    border-left: 1px solid var(--line);
    border-top: 1px solid var(--line);

    margin-top: 40px;
}

.skill {
    min-height: 180px;

    padding: 25px;

    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    transition: .35s ease;
}

.skill:hover {
    background: rgba(139,92,246,.05);

    transform: translateY(-5px);
}

.skill > span {
    color: var(--purple-light);

    font-size: 10px;

    font-weight: 700;
}

.skill h3 {
    margin-top: 45px;

    font-family: var(--display);

    font-size: 22px;
}

.skill p {
    color: var(--muted-2);

    font-size: 12px;
}

/* =========================================================
   WEB DESIGN PROJECTS
========================================================= */

.web-projects-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;

}


.web-project-card {

    min-width: 0;

    border: 1px solid var(--line);

    border-radius: 22px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,.035),
            rgba(255,255,255,.01)
        );

    overflow: hidden;

    transition:
        transform .4s ease,
        border-color .4s ease,
        background .4s ease;

}


.web-project-card:hover {

    transform: translateY(-8px);

    border-color:
        rgba(139,92,246,.35);

    background:
        linear-gradient(
            145deg,
            rgba(139,92,246,.08),
            rgba(255,255,255,.015)
        );

}


/* PROJECT IMAGE */

.web-project-image {

    display: block;

    position: relative;

    width: 100%;

    aspect-ratio: 16 / 10;

    overflow: hidden;

    background: #0b0b10;

}


.web-project-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition:
        transform .7s
        cubic-bezier(.2,.8,.2,1),
        filter .5s ease;

}


.web-project-card:hover
.web-project-image img {

    transform: scale(1.06);

    filter: brightness(.55);

}


/* IMAGE OVERLAY */

.web-project-overlay {

    position: absolute;

    inset: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    background:
        rgba(7,7,11,.45);

    opacity: 0;

    transition: .4s ease;

}


.web-project-card:hover
.web-project-overlay {

    opacity: 1;

}


.web-project-overlay span {

    font-size: 10px;

    letter-spacing: .16em;

    font-weight: 700;

    color: white;

}


.web-project-overlay strong {

    width: 38px;

    height: 38px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: white;

    color: black;

    font-size: 15px;

}


/* PROJECT NUMBER */

.web-project-number {

    position: absolute;

    top: 15px;

    left: 15px;

    width: 35px;

    height: 35px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background:
        rgba(0,0,0,.6);

    backdrop-filter: blur(12px);

    border:
        1px solid rgba(255,255,255,.12);

    color: white;

    font-size: 10px;

    font-weight: 700;

}


/* PROJECT INFO */

.web-project-info {

    padding: 22px;

}


.web-project-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

}


.web-project-category {

    color: var(--purple-light);

    font-size: 9px;

    letter-spacing: .13em;

    font-weight: 700;

}


.web-project-tech {

    color: var(--muted-2);

    font-size: 9px;

    white-space: nowrap;

}


.web-project-info h3 {

    margin-top: 18px;

    font-family: var(--display);

    font-size: 27px;

    line-height: 1;

    letter-spacing: -.04em;

}


.web-project-info p {

    margin-top: 14px;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.75;

}


.web-project-link {

    display: inline-flex;

    align-items: center;

    gap: 8px;

    margin-top: 20px;

    color: white;

    font-size: 11px;

    font-weight: 700;

    transition: .3s ease;

}


.web-project-link span {

    color: var(--purple-light);

    transition: .3s ease;

}


.web-project-link:hover {

    color: var(--purple-light);

}


.web-project-link:hover span {

    transform: translate(3px,-3px);

}


/* OFFICIAL WEBSITE BUTTON */

.web-projects-footer {

    margin-top: 55px;

    padding-top: 30px;

    border-top: 1px solid var(--line);

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 25px;

}


.web-projects-footer span {

    display: block;

    color: var(--muted-2);

    font-size: 9px;

    letter-spacing: .16em;

    font-weight: 700;

}


.web-projects-footer strong {

    display: block;

    margin-top: 5px;

    font-family: var(--display);

    font-size: 18px;

}


/* =========================================================
   WEB PROJECTS — TABLET
========================================================= */

@media (max-width: 950px) {

    .web-projects-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

    }

}


/* =========================================================
   WEB PROJECTS — MOBILE
========================================================= */

@media (max-width: 600px) {

    .web-projects-grid {

        grid-template-columns: 1fr;

        gap: 24px;

    }


    .web-project-image {

        aspect-ratio: 16 / 10;

    }


    .web-project-overlay {

        opacity: 1;

        align-items: flex-end;

        justify-content: space-between;

        padding: 15px;

        background:
            linear-gradient(
                to top,
                rgba(0,0,0,.65),
                transparent 55%
            );

    }


    .web-project-overlay strong {

        width: 34px;

        height: 34px;

    }


    .web-project-info {

        padding: 18px;

    }


    .web-project-info h3 {

        font-size: 24px;

    }


    .web-project-info p {

        font-size: 12px;

    }


    .web-projects-footer {

        margin-top: 40px;

        padding-top: 22px;

        flex-direction: column;

        align-items: flex-start;

    }


    .web-projects-footer strong {

        font-size: 16px;

    }


    .web-projects-footer .btn {

        width: 100%;

    }

}

/* =========================================================
   PROJECT
   ========================================================= */

.project-card {
    display: grid;

    grid-template-columns: .85fr 1.15fr;

    gap: 70px;

    padding: 65px;

    border: 1px solid var(--line);

    border-radius: 30px;

    background:
        radial-gradient(
            circle at 80% 50%,
            rgba(139,92,246,.12),
            transparent 45%
        ),
        #0c0c12;

    overflow: hidden;
}

.project-label {
    color: var(--purple-light);

    font-size: 10px;

    letter-spacing: .16em;

    font-weight: 700;
}

.project-info h2 {
    margin-top: 18px;

    font-family: var(--display);

    font-size: clamp(55px, 6vw, 80px);

    line-height: .9;

    letter-spacing: -.07em;
}

.project-info h2 span {
    color: var(--purple-light);
}

.project-info > p {
    max-width: 450px;

    margin: 25px 0;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.8;
}

.project-tags {
    display: flex;

    flex-wrap: wrap;

    gap: 7px;

    margin-bottom: 30px;
}

.project-tags span {
    padding: 7px 10px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--muted);

    font-size: 10px;
}

.project-visual {
    min-height: 400px;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;

    min-width: 0;
}

.project-glow {
    position: absolute;

    width: 300px;
    height: 300px;

    border-radius: 50%;

    background: var(--purple);

    filter: blur(110px);

    opacity: .17;
}

.cv-browser {
    width: min(500px, 100%);

    position: relative;

    z-index: 2;

    border: 1px solid rgba(255,255,255,.13);

    border-radius: 18px;

    overflow: hidden;

    transform:
        perspective(1000px)
        rotateY(-8deg)
        rotateX(3deg);

    box-shadow:
        -30px 35px 80px rgba(0,0,0,.45);

    transition: .5s ease;
}

.project-card:hover .cv-browser {
    transform:
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateY(-8px);
}

.cv-browser-top {
    height: 42px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 15px;

    background: #17171f;

    border-bottom: 1px solid var(--line);

    font-size: 10px;

    color: var(--muted);
}

.cv-browser-top > div {
    display: flex;

    gap: 5px;
}

.cv-browser-top i {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #555;
}

.cv-preview {
    min-height: 330px;

    display: grid;

    grid-template-columns: 95px 1fr;

    background: #e8e8eb;
}

.cv-sidebar {
    padding: 30px 15px;

    background: #191922;
}

.cv-sidebar span {
    display: block;

    height: 7px;

    margin-bottom: 14px;

    border-radius: 5px;

    background: #353542;
}

.cv-paper {
    margin: 25px;

    padding: 25px;

    background: white;

    box-shadow:
        0 10px 25px rgba(0,0,0,.15);
}

.cv-avatar {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #8b5cf6;

    color: white;

    font-size: 12px;

    font-weight: 700;
}

.cv-big {
    width: 55%;

    height: 13px;

    margin-top: 20px;

    border-radius: 5px;

    background: #25252d;
}

.cv-line {
    width: 85%;

    height: 6px;

    margin-top: 12px;

    border-radius: 5px;

    background: #bdbdc4;
}

.cv-short {
    width: 45%;

    height: 6px;

    margin-top: 8px;

    border-radius: 5px;

    background: #d1d1d5;
}

.cv-divider {
    width: 100%;

    height: 1px;

    margin: 25px 0;

    background: #ddd;
}

.cv-row {
    display: flex;

    gap: 20px;

    margin-top: 12px;
}

.cv-row i {
    display: block;

    height: 8px;

    flex: 1;

    border-radius: 5px;

    background: #ddd;
}

/* =========================================================
   SERVICES
   ========================================================= */

.services {
    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
}

.service {
    min-height: 290px;

    padding: 32px;

    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);

    transition: .35s ease;
}

.service:hover {
    background:
        radial-gradient(
            circle at top right,
            rgba(139,92,246,.12),
            transparent 50%
        );

    transform: translateY(-5px);
}

.service > span {
    color: var(--purple-light);

    font-size: 10px;

    font-weight: 700;
}

.service h3 {
    margin-top: 90px;

    font-family: var(--display);

    font-size: 28px;

    letter-spacing: -.04em;
}

.service p {
    margin-top: 12px;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.7;
}

/* =========================================================
   CONTACT
   ========================================================= */

.contact-section {
    padding-bottom: 150px;
}

.contact-box {
    padding: 100px 30px;

    text-align: center;

    border: 1px solid var(--line);

    border-radius: 30px;

    background:
        radial-gradient(
            circle at 50% 0%,
            rgba(139,92,246,.15),
            transparent 50%
        ),
        #0b0b11;

    position: relative;

    overflow: hidden;
}

.availability {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 9px;

    color: var(--muted-2);

    font-size: 10px;

    font-weight: 700;

    letter-spacing: .16em;
}

.availability span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #72e38b;

    box-shadow:
        0 0 12px #72e38b;

    animation:
        pulseDot 2s infinite;
}

@keyframes pulseDot {
    0% {
        box-shadow:
            0 0 0 0 rgba(114,227,139,.5);
    }

    70% {
        box-shadow:
            0 0 0 8px rgba(114,227,139,0);
    }

    100% {
        box-shadow:
            0 0 0 0 rgba(114,227,139,0);
    }
}

.contact-box h2 {
    margin-top: 25px;

    font-family: var(--display);

    font-size: clamp(50px, 7vw, 90px);

    line-height: .9;

    letter-spacing: -.07em;
}

.contact-box h2 span {
    color: var(--purple-light);
}

.contact-box > p {
    max-width: 500px;

    margin: 28px auto 35px;

    color: var(--muted);

    font-size: 14px;
}

.social-links {
    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 10px;
}

.social-links a {
    padding: 11px 15px;

    border: 1px solid var(--line);

    border-radius: 100px;

    color: var(--muted);

    font-size: 11px;

    transition: .3s ease;
}

.social-links a:hover {
    color: white;

    background: rgba(139,92,246,.1);

    border-color: rgba(139,92,246,.4);

    transform: translateY(-3px);
}

/* =========================================================
   FOOTER
   ========================================================= */

footer {
    width: min(var(--container), calc(100% - 40px));

    margin: 0 auto;

    padding: 35px 0 25px;

    border-top: 1px solid var(--line);
}

.footer-top {
    display: grid;

    grid-template-columns: 1fr auto 1fr;

    align-items: center;

    gap: 30px;
}

.footer-text {
    color: var(--muted-2);

    font-size: 11px;

    text-align: center;
}

.footer-socials {
    display: flex;

    justify-content: flex-end;

    flex-wrap: wrap;

    gap: 17px;
}

.footer-socials a {
    color: var(--muted-2);

    font-size: 11px;

    transition: .3s ease;
}

.footer-socials a:hover {
    color: white;
}

.footer-bottom {
    margin-top: 35px;

    padding-top: 20px;

    border-top: 1px solid var(--line);

    display: flex;

    justify-content: space-between;

    gap: 20px;

    color: #555560;

    font-size: 10px;
}

/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 950px) {

    .navbar {
        width: calc(100% - 30px);
        height: 68px;
    }

    .desktop-nav,
    .nav-button {
        display: none;
    }

    .menu-button {
        display: grid;
        place-items: center;
    }

    .mobile-menu {
        top: 68px;
    }

    .hero {
        width: calc(100% - 40px);

        grid-template-columns: 1fr;

        text-align: center;

        min-height: auto;

        padding:
            70px 0
            90px;

        gap: 50px;
    }

    .hero-content {
        display: flex;

        flex-direction: column;

        align-items: center;
    }

    .hero-description {
        max-width: 650px;
    }

    .hero-socials {
        justify-content: center;
    }

    .hero-image {
        min-height: 500px;

        width: 100%;

        overflow: visible;
    }

    .about-grid {
        grid-template-columns: 1fr;

        gap: 50px;
    }

    .section-heading,
    .web-intro {
        grid-template-columns: 1fr;

        gap: 25px;
    }

    .gallery {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .project-card {
        grid-template-columns: 1fr;

        padding: 45px;

        gap: 50px;
    }

    .services {
        grid-template-columns: 1fr;
    }

    .skills {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }

    .footer-top {
        grid-template-columns: 1fr;

        justify-items: center;
    }

    .footer-socials {
        justify-content: center;
    }

    .footer-bottom {
        flex-direction: column;

        text-align: center;

        align-items: center;
    }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 600px) {

    html {
        scroll-padding-top: 70px;
    }

    body {
        width: 100%;
        overflow-x: hidden;
    }

    body::before {
        background-size: 40px 40px;
        opacity: .35;
    }

    .bg-glow {
        width: 280px;
        height: 280px;
        filter: blur(90px);
    }

    /* NAV */

    .navbar {
        width: calc(100% - 24px);
        height: 64px;
    }

    .logo {
        font-size: 16px;
    }

    .logo-mark {
        width: 34px;
        height: 34px;
    }

    .menu-button {
        width: 40px;
        height: 40px;
    }

    .mobile-menu {
        top: 64px;

        left: 12px;
        right: 12px;

        padding: 12px;

        border-radius: 16px;
    }

    .mobile-menu a {
        padding: 12px 13px;

        font-size: 14px;
    }

    /* HERO */

    .hero {
        width: calc(100% - 24px);

        padding:
            55px 0
            65px;

        gap: 20px;
    }

    .hero-tag {
        font-size: 9px;

        letter-spacing: .14em;

        margin-bottom: 18px;
    }

    .hero-tag::before {
        width: 18px;
    }

    .hero h1 {
        width: 100%;

        font-size:
            clamp(
                48px,
                15vw,
                70px
            );

        line-height: .92;
    }

    .hero h2 {
        max-width: 340px;

        margin-top: 20px;

        font-size: 23px;

        line-height: 1.2;
    }

    .hero-description {
        max-width: 350px;

        margin-top: 18px;

        font-size: 13px;

        line-height: 1.75;
    }

    .hero-buttons {
        width: 100%;

        flex-direction: column;

        gap: 10px;

        margin-top: 26px;
    }

    .hero-buttons .btn {
        width: 100%;

        min-height: 48px;
    }

    .hero-socials {
        gap: 15px;

        margin-top: 25px;
    }

    .hero-socials a {
        font-size: 11px;
    }

    /* HERO IMAGE */

    .hero-image {
        width: 100%;

        min-height: 350px;

        margin-top: 5px;

        overflow: visible;
    }

    .profile-frame {
        width:
            min(
                270px,
                72vw
            );

        padding: 7px;
    }

    .image-glow {
        width: 260px;
        height: 260px;

        filter: blur(15px);
    }

    .hero-image::before {
        width: 315px;
        height: 315px;
    }

    .hero-image::after {
        width: 350px;
        height: 350px;
    }

    .floating-card {
        padding: 8px 10px;

        gap: 6px;

        border-radius: 11px;

        font-size: 9px;

        white-space: nowrap;
    }

    .floating-card span {
        font-size: 13px;
    }

    .card-one {
        left: 1%;
        top: 22%;
    }

    .card-two {
        right: 1%;
        bottom: 20%;
    }

    /* TICKER */

    .ticker {
        padding: 13px 0;
    }

    .ticker-track {
        gap: 22px;

        animation-duration: 20s;
    }

    .ticker span {
        font-size: 10px;
    }

    .ticker b {
        font-size: 11px;
    }

    /* SECTIONS */

    .section {
        padding: 75px 0;
    }

    .section-width {
        width: calc(100% - 24px);
    }

    .section-label {
        margin-bottom: 38px;

        padding-bottom: 14px;

        font-size: 9px;
    }

    /* ABOUT */

    .about-grid {
        gap: 35px;
    }

    .about-grid small {
        font-size: 9px;
    }

    .about-grid h2 {
        margin-top: 16px;

        font-size: 46px;

        line-height: .95;
    }

    .large-text {
        font-size: 19px;

        line-height: 1.5;

        margin-bottom: 22px;
    }

    .about-content > p:not(.large-text) {
        font-size: 13px;

        line-height: 1.75;
    }

    .tags {
        margin-top: 24px;
    }

    .tags span {
        padding: 7px 10px;

        font-size: 10px;
    }

    /* HEADINGS */

    .section-heading {
        gap: 20px;

        margin-bottom: 35px;
    }

    .section-heading h2,
    .web-intro h2 {
        font-size: 46px;

        line-height: .95;
    }

    .section-heading p,
    .web-intro p {
        font-size: 13px;

        line-height: 1.75;
    }

    /* GALLERY */

    .gallery {
        grid-template-columns: 1fr;

        gap: 30px;
    }

    .wallpaper-image {
        aspect-ratio: 4 / 5;

        border-radius: 16px;
    }

    .wallpaper-hover {
        opacity: 1;

        padding: 15px;

        background:
            linear-gradient(
                to top,
                rgba(0,0,0,.65),
                transparent 55%
            );
    }

    .wallpaper-hover span {
        font-size: 12px;
    }

    .wallpaper-hover strong {
        width: 34px;
        height: 34px;

        font-size: 13px;
    }

    .wallpaper-info {
        gap: 10px;

        padding-top: 13px;
    }

    .wallpaper-info h3 {
        font-size: 15px;
    }

    .artwork-footer {
        margin-top: 40px;

        padding-top: 22px;

        flex-direction: column;

        align-items: flex-start;
    }

    .artwork-footer strong {
        font-size: 16px;
    }

    .artwork-footer .btn {
        width: 100%;
    }

    /* WEB */

    .web-intro {
        gap: 20px;

        margin-bottom: 35px;
    }

    .browser {
        border-radius: 17px;
    }

    .browser-bar {
        height: 42px;

        padding: 0 12px;

        font-size: 9px;
    }

    .browser-content {
        min-height: 420px;

        grid-template-columns: 1fr;

        padding:
            35px 22px
            25px;
    }

    .browser-content h3 {
        font-size: 58px;

        margin:
            12px 0
            20px;
    }

    .browser-art {
        min-height: 180px;

        margin-top: 5px;
    }

    .shape-a {
        width: 170px;
        height: 170px;

        right: 20%;
    }

    .shape-b {
        width: 85px;
        height: 85px;
    }

    .skills {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));

        margin-top: 25px;
    }

    .skill {
        min-height: 135px;

        padding: 17px;
    }

    .skill h3 {
        margin-top: 28px;

        font-size: 17px;
    }

    .skill p {
        font-size: 10px;
    }

    /* PROJECT */

    .project-card {
        grid-template-columns: 1fr;

        padding:
            28px 18px;

        gap: 30px;

        border-radius: 20px;
    }

    .project-info h2 {
        font-size: 54px;
    }

    .project-info > p {
        font-size: 13px;

        line-height: 1.75;

        margin: 20px 0;
    }

    .project-tags {
        margin-bottom: 24px;
    }

    .project-visual {
        min-height: 260px;

        width: 100%;
    }

    .project-glow {
        width: 220px;
        height: 220px;
    }

    .cv-browser {
        width: 100%;

        transform: none;
    }

    .project-card:hover .cv-browser {
        transform: none;
    }

    .cv-preview {
        grid-template-columns:
            55px minmax(0, 1fr);

        min-height: 230px;
    }

    .cv-sidebar {
        padding:
            18px 9px;
    }

    .cv-paper {
        margin: 12px;

        padding: 13px;
    }

    .cv-avatar {
        width: 38px;
        height: 38px;

        font-size: 10px;
    }

    .cv-big {
        margin-top: 14px;
    }

    .cv-divider {
        margin: 18px 0;
    }

    .cv-row {
        gap: 10px;
    }

    /* SERVICES */

    .services {
        grid-template-columns: 1fr;
    }

    .service {
        min-height: 220px;

        padding: 23px;
    }

    .service h3 {
        margin-top: 55px;

        font-size: 24px;
    }

    .service p {
        font-size: 12px;
    }

    /* CONTACT */

    .contact-section {
        padding-bottom: 80px;
    }

    .contact-box {
        padding:
            65px 15px;

        border-radius: 20px;
    }

    .contact-box h2 {
        font-size: 48px;

        line-height: .92;
    }

    .contact-box > p {
        font-size: 13px;

        line-height: 1.75;

        margin:
            22px auto
            28px;
    }

    .social-links {
        display: grid;

        grid-template-columns: 1fr;

        gap: 8px;
    }

    .social-links a {
        width: 100%;

        padding: 11px;
    }

    /* FOOTER */

    footer {
        width: calc(100% - 24px);

        padding:
            28px 0
            20px;
    }

    .footer-top {
        gap: 18px;
    }

    .footer-text {
        font-size: 10px;
    }

    .footer-socials {
        gap: 12px;
    }

    .footer-socials a {
        font-size: 10px;
    }

    .footer-bottom {
        margin-top: 25px;

        padding-top: 17px;

        gap: 8px;

        font-size: 9px;
    }
}

/* =========================================================
   VERY SMALL PHONES
   ========================================================= */

@media (max-width: 380px) {

    .hero h1 {
        font-size: 46px;
    }

    .hero h2 {
        font-size: 21px;
    }

    .hero-image {
        min-height: 310px;
    }

    .profile-frame {
        width: 235px;
    }

    .hero-image::before {
        width: 275px;
        height: 275px;
    }

    .hero-image::after {
        width: 305px;
        height: 305px;
    }

    .floating-card {
        font-size: 8px;

        padding:
            7px 8px;
    }

    .about-grid h2,
    .section-heading h2,
    .web-intro h2 {
        font-size: 42px;
    }

    .browser-content h3 {
        font-size: 51px;
    }

    .skills {
        grid-template-columns: 1fr;
    }

    .contact-box h2 {
        font-size: 42px;
    }
}

/* =========================================================
   LANDSCAPE PHONES
   ========================================================= */

@media (max-height: 500px) and (orientation: landscape) {

    .hero {
        padding:
            40px 0
            60px;
    }

    .hero-image {
        min-height: 300px;
    }

    .profile-frame {
        width: 230px;
    }

    .hero-image::before {
        width: 270px;
        height: 270px;
    }

    .hero-image::after {
        width: 300px;
        height: 300px;
    }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {

    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
    }
}
