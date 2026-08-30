(() => {
  const ensureSiteIcons = () => {
    let favicon = document.querySelector('link[rel~="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.type = 'image/png';
    favicon.href = 'dama01.png';

    let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if (!appleIcon) {
      appleIcon = document.createElement('link');
      appleIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleIcon);
    }
    appleIcon.href = 'dama01.png';
  };

  ensureSiteIcons();

  const labels = {
    pl: { offer: "Oferta", trends: "Trendy" },
    uk: { offer: "Пропозиція", trends: "Тренди" },
    en: { offer: "Offer", trends: "Trends" }
  };

  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const home = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/');
  const offerPage = /(^|\/)oferta\.html$/.test(location.pathname);
  const news = nav.querySelector('a');
  if (!news) return;

  let offer = nav.querySelector('[data-extra-nav="offer"]');
  let trends = nav.querySelector('[data-extra-nav="trends"]');

  if (!offer) {
    offer = document.createElement('a');
    offer.dataset.extraNav = 'offer';
  }
  offer.href = 'oferta.html';

  if (!trends) {
    trends = document.createElement('a');
    trends.dataset.extraNav = 'trends';
  }
  trends.href = home ? '#trendy' : 'index.html#trendy';

  news.insertAdjacentElement('afterend', offer);
  offer.insertAdjacentElement('afterend', trends);

  if (offerPage) {
    offer.classList.add('active');
    offer.setAttribute('aria-current', 'page');
  }

  const apply = (language) => {
    const selected = labels[language] ? language : 'pl';
    offer.textContent = labels[selected].offer;
    trends.textContent = labels[selected].trends;
  };

  let language = 'pl';
  try {
    language = localStorage.getItem('klanLanguage') || 'pl';
  } catch (_) {}
  apply(language);

  document.querySelectorAll('.lang-button').forEach((button) => {
    button.addEventListener('click', () => apply(button.dataset.lang));
  });
})();
