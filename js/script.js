
// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');
if (navToggle && navbar) {
  navToggle.addEventListener('click', () => {
    const ul = navbar.querySelector('ul');
    if (ul) ul.style.display = (ul.style.display === 'flex' ? 'none' : 'flex');
  });
}

// Fade-in on scroll
const fades = document.querySelectorAll('.fade-in');
const onScroll = () => {
  const trigger = window.innerHeight * 0.9;
  fades.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) el.classList.add('visible');
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  if (!q) return;
  q.addEventListener('click', () => item.classList.toggle('open'));
});

// Testimonial slider
(function(){
  const slider = document.getElementById('testimonialSlider');
  if (!slider) return;
  const items = slider.querySelectorAll('.testimonial');
  if (!items.length) return;
  let i = 0;
  const show = idx => {
    items.forEach((el,j)=>el.classList.toggle('active', j===idx));
  };
  show(i);
  const prev = document.getElementById('prevTestimonial');
  const next = document.getElementById('nextTestimonial');
  prev && prev.addEventListener('click', () => { i = (i-1+items.length)%items.length; show(i); });
  next && next.addEventListener('click', () => { i = (i+1)%items.length; show(i); });
  // auto-advance
  setInterval(()=>{ i = (i+1)%items.length; show(i); }, 6000);
})();
