(() => {
  const carousel = document.querySelector('.advice-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('[data-carousel-slide]'));
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  const dots = Array.from(carousel.querySelectorAll('.carousel-dot'));

  let current = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle('active', active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  prev.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));

  dots.forEach((dot) => {
    dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide)));
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showSlide(current - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showSlide(current + 1);
    }
  });

  carousel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(distance > 0 ? current - 1 : current + 1);
  }, { passive: true });

  showSlide(0);
})();
