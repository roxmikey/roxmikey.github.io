
(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('mainNav');
  if(navToggle && nav){
    navToggle.addEventListener('click', ()=>{
      const open = nav.style.display === 'block';
      nav.style.display = open ? 'none' : 'block';
      navToggle.setAttribute('aria-expanded', String(!open));
    });
  }

  function loadGallery(){
    const mount = document.getElementById('gallery');
    if(!mount) return;
    const cfg = (window.GALLERY_CONFIG || {});
    const path = cfg.galleryPath || 'assets/images/gallery';
    if(!cfg.owner || !cfg.repo){
      mount.innerHTML = '<div class="card"><p>To enable auto‑gallery, set your GitHub <code>owner</code>, <code>repo</code> and <code>branch</code> in <code>assets/js/config.js</code>, then upload images (.jpg/.jpeg/.png) into <code>'+path+'</code>.</p></div>';
      return;
    }
    const branch = cfg.branch || 'main';
    const api = 'https://api.github.com/repos/'+encodeURIComponent(cfg.owner)+'/'+encodeURIComponent(cfg.repo)+'/contents/'+encodeURIComponent(path)+'?ref='+encodeURIComponent(branch);
    fetch(api).then(r=>r.json()).then(items=>{
      if(!Array.isArray(items)){
        mount.innerHTML = '<p>Couldn’t load photos yet. Check repository visibility and config.js.</p>';
        return;
      }
      const files = items.filter(x => x.type==='file' && /\.(jpe?g|png)$/i.test(x.name));
      if(!files.length){
        mount.innerHTML = '<p>No photos yet — add some images to <code>'+path+'</code>.</p>';
        return;
      }
      const grid = document.createElement('div');
      grid.className = 'gallery-grid';
      files.forEach(file=>{
        const raw = (file.download_url) ? file.download_url
          : file.html_url.replace('github.com','raw.githubusercontent.com').replace('/blob/','/');
        const fig = document.createElement('figure');
        fig.className = 'gallery-item';
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.alt = file.name.replace(/[-_]/g,' ').replace(/\..+$/,'');
        img.src = raw;
        fig.appendChild(img);
        grid.appendChild(fig);
      });
      mount.innerHTML = '';
      mount.appendChild(grid);
    }).catch(err=>{
      console.error(err);
      mount.innerHTML = '<p>Couldn’t load photos. Check your internet or config.</p>';
    });
  }

  document.addEventListener('DOMContentLoaded', loadGallery);
})();
