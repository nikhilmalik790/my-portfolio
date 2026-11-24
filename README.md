# Nikhil Malik — Portfolio

Glassmorphism + iOS-style personal portfolio.  
Pure HTML, CSS, JS — no frameworks, no build tools needed.

---

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Main page (edit content here)
├── css/
│   └── style.css       ← All styles (glassmorphism + iOS look)
├── js/
│   └── main.js         ← Typewriter, scroll reveal, mobile menu
├── assets/
│   └── photo.jpg       ← ADD YOUR PHOTO HERE
└── README.md
```

---

## ✏️ How to Update

### 1. Add Your Photo
- Put your photo in `assets/` folder named `photo.jpg`
- Open `index.html`, find this line and uncomment it:
  ```html
  <img src="assets/photo.jpg" alt="Nikhil Malik" />
  ```


### 2. Update Bio
- In `index.html`, find the `<!-- EDIT: Update this bio -->` comment
- Change the `<p>` text in the About section

### 3. Update Email
- Search for `your@email.com` in `index.html` and replace with your real email

### 4. Update Skills
- Find the `<!-- EDIT: Add/remove skills -->` comment
- Add or remove `<div class="skill-pill">SkillName</div>` lines

### 5. Update Typewriter Roles
- In `js/main.js`, find the `roles` array at the top
- Add/remove your roles:
  ```js
  const roles = ['Web Developer', 'React Dev', 'Your Role'];
  ```

### 6. Update Stats (About section)
- Find the `<!-- EDIT: Update these numbers -->` comment
- Change the numbers in `<span class="stat-num">`

---

## ➕ How to Add a New Project

Open `index.html`, find the Projects section.  
Copy this block and paste it inside `<div class="projects-grid">`:

```html
<div class="project-card glass-card">
  <div class="project-top">
    <div class="project-icon">🚀</div>  <!-- Change emoji -->
    <div class="project-links">
      <a href="YOUR_LIVE_URL" target="_blank" class="icon-link" title="Live Demo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </a>
      <a href="YOUR_GITHUB_REPO_URL" target="_blank" class="icon-link" title="Code">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      </a>
    </div>
  </div>
  <h3 class="project-title">Your Project Name</h3>
  <p class="project-desc">What does it do? Keep it 1–2 sentences.</p>
  <div class="project-tags">
    <span class="tag">React</span>
    <span class="tag">Node.js</span>
  </div>
</div>
```

---

## 🌐 How to Host (Free)

**GitHub Pages (Easiest):**
1. Push this folder to a GitHub repo named `username.github.io`
2. Go to Settings → Pages → Source: main branch
3. Your site will be live at `https://username.github.io`

**Netlify (Drag & drop):**
1. Go to netlify.com
2. Drag the entire `portfolio` folder onto the deploy zone
3. Done — live in 10 seconds with a free URL

---

## 🎨 Customization Tips

- **Change accent color:** In `css/style.css`, change `--accent: #7c6ff7` to any hex color
- **Change second accent:** Change `--accent-2: #5aafff`
- **Change blob colors:** Find `.blob-1`, `.blob-2`, `.blob-3` and update the radial-gradient colors
- **Add more sections:** Follow the same `<section class="section" id="...">` pattern
