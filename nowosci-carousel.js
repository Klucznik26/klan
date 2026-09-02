(() => {
  const carousels = document.querySelectorAll('[data-news-carousel]');
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.news-carousel-track');
    const slides = Array.from(carousel.querySelectorAll('[data-news-slide]'));
    const prev = carousel.querySelector('.news-carousel-prev');
    const next = carousel.querySelector('.news-carousel-next');
    const dotsWrap = carousel.querySelector('.news-carousel-dots');
    const controls = carousel.querySelector('.news-carousel-controls');

    if (!track || !slides.length || !prev || !next || !dotsWrap || !controls) return;

    let current = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    const dots = slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'news-carousel-dot';
      dot.setAttribute('aria-label', `Slajd ${index + 1}`);
      dot.addEventListener('click', () => show(index));
      dotsWrap.appendChild(dot);
      return dot;
    });

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${current * 100}%)`;

      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle('active', active);
        if (active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
    };

    if (slides.length <= 1) {
      controls.hidden = true;
    } else {
      prev.addEventListener('click', () => show(current - 1));
      next.addEventListener('click', () => show(current + 1));

      carousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          show(current - 1);
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          show(current + 1);
        }
      });

      carousel.addEventListener('touchstart', (event) => {
        touchStartX = event.changedTouches[0].screenX;
      }, { passive: true });

      carousel.addEventListener('touchend', (event) => {
        touchEndX = event.changedTouches[0].screenX;
        const distance = touchEndX - touchStartX;
        if (Math.abs(distance) < 45) return;
        show(distance > 0 ? current - 1 : current + 1);
      }, { passive: true });
    }

    show(0);
  });
})();
