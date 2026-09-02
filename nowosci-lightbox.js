(() => {
  const productImages = Array.from(document.querySelectorAll('[data-product-image]'));
  if (!productImages.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'product-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="product-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Podgląd produktu">
      <button class="product-lightbox-close" type="button" aria-label="Zamknij podgląd">×</button>
      <figure class="product-lightbox-image-wrap">
        <img class="product-lightbox-image" alt="">
      </figure>
      <p class="product-lightbox-description"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const dialog = lightbox.querySelector('.product-lightbox-dialog');
  const largeImage = lightbox.querySelector('.product-lightbox-image');
  const description = lightbox.querySelector('.product-lightbox-description');
  const closeButton = lightbox.querySelector('.product-lightbox-close');

  let activeImage = null;
  let lastFocused = null;

  const languageKey = () => {
    const lang = (document.documentElement.lang || 'pl').toLowerCase();
    if (lang.startsWith('uk')) return 'uk';
    if (lang.startsWith('en')) return 'en';
    return 'pl';
  };

  const fallbackDescription = {
    pl: 'Opis produktu w przygotowaniu.',
    uk: 'Опис товару готується.',
    en: 'Product description coming soon.'
  };

  const getDescription = (image) => {
    const lang = languageKey();
    return image.dataset[`description${lang.charAt(0).toUpperCase()}${lang.slice(1)}`]
      || fallbackDescription[lang];
  };

  const updateContent = () => {
    if (!activeImage) return;
    largeImage.src = activeImage.currentSrc || activeImage.src;
    largeImage.alt = activeImage.alt || 'KLAN OBUWIE';
    description.textContent = getDescription(activeImage);
  };

  const open = (image) => {
    activeImage = image;
    lastFocused = document.activeElement;
    updateContent();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    largeImage.removeAttribute('src');
    activeImage = null;
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };

  productImages.forEach((image) => {
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-label', `${image.alt || 'Produkt'} — powiększ zdjęcie`);

    image.addEventListener('click', () => open(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open(image);
      }
    });
  });

  closeButton.addEventListener('click', close);

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
      close();
    }
  });

  document.querySelectorAll('.lang-button').forEach((button) => {
    button.addEventListener('click', () => {
      if (lightbox.classList.contains('is-open')) updateContent();
    });
  });
})();
