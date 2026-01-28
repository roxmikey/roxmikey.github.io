(function(){
  const menuBtn = document.querySelector('[data-menu]');
  const drawer = document.querySelector('[data-drawer]');
  if(menuBtn && drawer){
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Hide header on scroll down, show on scroll up (improves mobile view)
  const headerEl = document.querySelector('header');
  let lastY = window.scrollY || 0;
  let ticking = false;

  function onScroll(){
    const y = window.scrollY || 0;
    const dy = y - lastY;

    // Only trigger after a small threshold to avoid jitter
    if(Math.abs(dy) > 8){
      if(headerEl){
        if(dy > 0 && y > 80){
          headerEl.classList.add('headerHidden');
          // If the mobile drawer is open, close it so it doesn't cover the page
          if(drawer && drawer.classList.contains('open')){
            drawer.classList.remove('open');
            if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
          }
        } else {
          headerEl.classList.remove('headerHidden');
        }
      }
      lastY = y;
    }
    ticking = false;
  }

  window.addEventListener('scroll', ()=>{
    if(!ticking){
      ticking = true;
      window.requestAnimationFrame(onScroll);
    }
  }, {passive:true});

  // Lightbox for gallery thumbnails (with prev/next)
  const lb = document.querySelector('[data-lightbox]');
  const lbImg = lb ? lb.querySelector('img') : null;
  const lbClose = lb ? lb.querySelector('[data-close]') : null;
  const lbPrev = lb ? lb.querySelector('[data-prev]') : null;
  const lbNext = lb ? lb.querySelector('[data-next]') : null;

  const thumbs = Array.from(document.querySelectorAll('[data-thumb]'));
  let currentIndex = -1;

  function showAt(idx){
    if(!lb || !lbImg || !thumbs.length) return;
    const n = thumbs.length;
    currentIndex = ((idx % n) + n) % n; // wrap
    const t = thumbs[currentIndex];
    const full = t.getAttribute('data-full');
    const alt = t.getAttribute('data-alt') || ('Gallery photo ' + (currentIndex + 1));
    lbImg.src = full;
    lbImg.alt = alt;
  }

  function openAt(idx){
    if(!lb || !lbImg || !thumbs.length) return;
    showAt(idx);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden','false');
  }

  function close(){
    if(!lb || !lbImg) return;
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden','true');
    // reset src to prevent background downloading large images on slow mobiles
    const old = lbImg.src;
    setTimeout(()=>{ if(lbImg.src === old) lbImg.src=''; }, 120);
    currentIndex = -1;
  }

  if(lb && lbImg && thumbs.length){
    thumbs.forEach((t, i) => t.addEventListener('click', () => openAt(i)));
    if(lbClose) lbClose.addEventListener('click', close);

    lb.addEventListener('click', (e)=>{ if(e.target === lb) close(); });

    if(lbPrev) lbPrev.addEventListener('click', (e)=>{ e.stopPropagation(); showAt(currentIndex - 1); });
    if(lbNext) lbNext.addEventListener('click', (e)=>{ e.stopPropagation(); showAt(currentIndex + 1); });

    // Keyboard support
    document.addEventListener('keydown', (e)=>{
      if(!lb.classList.contains('open')) return;
      if(e.key === 'Escape') close();
      if(e.key === 'ArrowLeft') showAt(currentIndex - 1);
      if(e.key === 'ArrowRight') showAt(currentIndex + 1);
    });

    // Basic swipe on touch devices
    let x0 = null;
    lb.addEventListener('touchstart', (e)=>{
      if(!lb.classList.contains('open')) return;
      x0 = e.touches && e.touches[0] ? e.touches[0].clientX : null;
    }, {passive:true});
    lb.addEventListener('touchend', (e)=>{
      if(!lb.classList.contains('open') || x0 === null) return;
      const x1 = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
      if(x1 === null) return;
      const dx = x1 - x0;
      if(Math.abs(dx) > 45){
        if(dx > 0) showAt(currentIndex - 1);
        else showAt(currentIndex + 1);
      }
      x0 = null;
    }, {passive:true});
  }


  // Close mobile drawer when a link is tapped
  if(drawer){
    drawer.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        drawer.classList.remove('open');
        if(menuBtn) menuBtn.setAttribute('aria-expanded','false');
      });
    });
  }

  // Mark active nav item (matches path)
  const path = (location.pathname || '/').split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href')||'').split('/').pop();
    if(href === path) a.classList.add('active');
  });
})();
