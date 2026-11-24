/* =============================================
   NIKHIL MALIK — PORTFOLIO JS v2
   ============================================= */

/* ---- PARTICLE CANVAS ---- */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [], mouse = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize, { passive: true });
window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

class Particle {
  constructor() { this.reset(true); }
  reset(rand) {
    this.x  = Math.random() * W;
    this.y  = rand ? Math.random() * H : H + 10;
    this.r  = Math.random() * 1.4 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = -(Math.random() * 0.3 + 0.1);
    this.alpha = Math.random() * 0.5 + 0.1;
<<<<<<< HEAD
    this.color = Math.random() > 0.6 ? '#1D4A35' : '#F2462E';
=======
    this.color = Math.random() > 0.6 ? '#6366f1' : '#22d3ee';
>>>>>>> c1e2d327e73c31b7bdc371e28d79bcba3d66a76c
  }
  update() {
    // subtle mouse repulsion
    const dx = this.x - mouse.x, dy = this.y - mouse.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < 120) {
      this.x += (dx / dist) * 0.6;
      this.y += (dy / dist) * 0.6;
    }
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset(false);
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// spawn particles
const COUNT = Math.min(120, Math.floor(W * H / 12000));
for (let i = 0; i < COUNT; i++) particles.push(new Particle());

// connect nearby particles
function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d < 100) {
        ctx.save();
        ctx.globalAlpha = (1 - d/100) * 0.07;
<<<<<<< HEAD
        ctx.strokeStyle = '#1D4A35';
=======
        ctx.strokeStyle = '#6366f1';
>>>>>>> c1e2d327e73c31b7bdc371e28d79bcba3d66a76c
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function animLoop() {
  ctx.clearRect(0, 0, W, H);
  drawConnections();
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animLoop);
}
animLoop();

/* ---- TYPEWRITER ---- */
const roles = [
  'Web Developer',
  'Frontend Engineer',
  'UI Enthusiast',
  'Problem Solver',
  // ADD more here
];
let ri = 0, ci = 0, deleting = false;
const roleEl = document.getElementById('roleText');

function typeWriter() {
  if (!roleEl) return;
  const word = roles[ri];
  roleEl.textContent = deleting ? word.slice(0, ci - 1) : word.slice(0, ci + 1);
  deleting ? ci-- : ci++;
  if (!deleting && ci === word.length) { deleting = true; setTimeout(typeWriter, 1800); return; }
  if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  setTimeout(typeWriter, deleting ? 50 : 90);
}
typeWriter();

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ---- MOBILE MENU ---- */
const menuBtn  = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
});
mobileMenu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuBtn.classList.remove('open');
  })
);

/* ---- SCROLL REVEAL ---- */
// Add .sr to all major blocks
document.querySelectorAll('.section > .container, .about-layout, .skills-track-wrap, .projects-grid, .contact-layout').forEach(el => {
  if (!el.closest('.hero')) el.classList.add('sr');
});

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.sr').forEach(el => revealObs.observe(el));

/* ---- ACTIVE NAV ---- */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  navAnchors.forEach(a => {
    const active = a.getAttribute('href') === '#' + cur;
    a.style.color = active ? '#f1f5f9' : '';
  });
}, { passive: true });

/* ---- FOOTER YEAR ---- */
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();
