(() => {
  const labels = {
    pl: { offer: "Oferta", trends: "Trendy" },
    uk: { offer: "Пропозиція", trends: "Тренди" },
    en: { offer: "Offer", trends: "Trends" }
  };

  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  const home = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/');
  const news = nav.querySelector('a');
  if (!news) return;

  let offer = nav.querySelector('[data-extra-nav="offer"]');
  let trends = nav.querySelector('[data-extra-nav="trends"]');

  if (!offer) {
    offer = document.createElement('a');
    offer.dataset.extraNav = 'offer';
    offer.href = home ? '#oferta' : 'index.html#oferta';
  }

  if (!trends) {
    trends = document.createElement('a');
    trends.dataset.extraNav = 'trends';
    trends.href = home ? '#trendy' : 'index.html#trendy';
  }

  news.insertAdjacentElement('afterend', offer);
  offer.insertAdjacentElement('afterend', trends);

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
