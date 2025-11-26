const CONFIG = {
  siteName: 'NEXUS PROJECT',
  handle: '@TEAMNEXUS',
  avatar: 'NXS',
  links: [
    { title: 'College web', desc: 'Pay fees & portal', href: 'https://srmcem.ac.in/' },
    { title: 'instagram', desc: 'connect', href: 'https://www.instagram.com/srmcem_official/' },
    { title: 'LinkedIn', desc: 'Connect', href: 'https://in.linkedin.com/school/shri-ramswaroop-memorial-college-of-engineering-and-management-lucknow/' },
    { title: 'Student Help', desc: 'Resources, Forms, & Support', href: 'http://127.0.0.1:3000/aaaaaa/hh/index.html' } // Added new link
  ],
  contactEmail: ''
};

/* Apply basic text */
document.getElementById('siteName').textContent = CONFIG.siteName;
document.getElementById('handle').textContent = CONFIG.handle;
document.getElementById('avatar').textContent = CONFIG.avatar;

/* Render link buttons */
const linksContainer = document.getElementById('links');
CONFIG.links.forEach(link => {
  const a = document.createElement('a');
  a.className = 'btn';
  a.href = link.href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.innerHTML = `
    <div class="icon">${(link.title||'') .charAt(0).toUpperCase()}</div>
    <div>
      <div style="font-weight:750">${link.title}</div>
      <div style="font-size:12px;color:rgba(128, 133, 111, 0.7)">${link.desc || ''}</div>
    </div>
  `;
  linksContainer.appendChild(a);
});

/* Copy URL button */
document.getElementById('copyBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'Copied!';
    setTimeout(()=> btn.textContent = 'Copy page URL', 1400);
  } catch(e) {
    alert('Copy failed — manually copy the URL');
  }
});


