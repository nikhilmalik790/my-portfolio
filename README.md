# Nikhil Malik — Portfolio

Personal portfolio website with a glassmorphism, iOS-inspired design.
Built with plain HTML, CSS, and JavaScript. No frameworks or build tools.

## Live Preview

Open `index.html` in a browser, or serve the folder with any static server.

## Project Structure

```
portfolio/
├── index.html          # Page content: banner, intro, about, skills, projects, contact
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Particle background, typewriter, navbar, mobile menu, scroll reveal
├── assets/
│   ├── Avatar.png      # 3D avatar shown in the top banner
│   ├── Avatar1.png     # Alternate avatar
│   └── photo.jpg       # Photo shown in the intro section
└── README.md
```

## Sections

- **Banner:** Avatar with the "PORTFOLIO" background text
- **Intro:** Name, rotating role text, short bio, and action buttons
- **About:** Short bio and links to GitHub and LinkedIn
- **Skills:** Scrolling list of technologies
- **Projects:** Project cards with links to GitHub repositories
- **Contact:** Email, GitHub, and LinkedIn links

## Updating the Site

### Intro and About text
Edit the `<p>` elements in `index.html` under the `intro` and `about` sections.

### Rotating roles
In `js/main.js`, edit the `roles` array:

```js
const roles = [
  'Web Developer',
  'Frontend Engineer',
  'UI Enthusiast',
  'Problem Solver',
];
```

### Skills
In `index.html`, in the `skillsTrack` element, add or remove:

```html
<span class="sk">SkillName</span>
```

The list is duplicated for the seamless scroll loop, so add new skills to both copies.

### Projects
In `index.html`, copy an existing `<article class="pcard">` block and place it inside `<div class="projects-grid">`, above the `<!--ADD NEW PROJECT-->` comment. Update the title, description, GitHub link, and tags:

```html
<article class="pcard">
  <div class="pcard-top">
    <span class="pcard-num">04</span>
    <div class="pcard-links">
      <a href="YOUR_GITHUB_REPO_URL" target="_blank" title="Code">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </a>
    </div>
  </div>
  <h3>Project Name</h3>
  <p>One or two sentences describing the project.</p>
  <div class="pcard-tags">
    <span>React</span><span>Node.js</span>
  </div>
</article>
```

To add a live demo link, uncomment the live-link `<a>` block in the card's `pcard-links` section and set its `href`.

### Contact details
In `index.html`, update the `clink` links in the contact section. The email link's `href` is currently `mailto:your@email.com`, while the displayed address is `nikhilmalik79062@email.com`. Make both match.

### Photos
- Replace `assets/photo.jpg` to change the intro photo.
- Replace `assets/Avatar.png` to change the banner avatar.

## Customization

In `css/style.css`:
- `--accent: #7c6ff7` sets the primary accent color.
- `--accent-2: #5aafff` sets the secondary accent color.
- `.blob-1`, `.blob-2`, `.blob-3` set the background glow colors.

## Hosting

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. Go to Settings → Pages and set the source to the `main` branch.
3. The site will be available at `https://<username>.github.io/<repo>/`.

**Netlify**
1. Go to netlify.com.
2. Drag the `portfolio` folder onto the deploy area.

## Links

- GitHub: https://github.com/nikhilmalik790
- LinkedIn: https://www.linkedin.com/in/nikhil-malik-41ba5a327
