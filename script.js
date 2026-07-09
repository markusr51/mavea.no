
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{}));

const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.setAttribute('aria-current', 'page');
  }
});
