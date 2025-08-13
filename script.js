
const lb = document.querySelector('.lightbox');
if (lb){
  const lbImg = lb.querySelector('img');
  const closeBtn = lb.querySelector('.close');
  document.addEventListener('click', (e)=>{
    const t = e.target;
    if (t.matches('[data-lightbox]')){
      lbImg.src = t.src;
      lb.classList.add('open');
    }
    if (t === lb || t === closeBtn){
      lb.classList.remove('open');
      lbImg.src = '';
    }
  });
}
const setActive = () => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });
};
setActive();
