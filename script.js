const translations = {
  pl: {
    pageTitle: "KLAN OBUWIE — sklep internetowy już wkrótce",
    description: "KLAN OBUWIE — sklep stacjonarny. Sklep internetowy już wkrótce.",
    navNews: "Nowości",
    navContact: "Kontakt",
    navMap: "Mapka dojazdu",
    navAbout: "O firmie",
    storeType: "Sklep stacjonarny",
    heroTitle: "Dobre buty.<br>Dobry krok.",
    lead: "Zapraszamy do KLAN OBUWIE. Nasz sklep internetowy jest właśnie w przygotowaniu.",
    launchBadge: "Sklep online już wkrótce",
    photoAlt: "Front sklepu obuwniczego KLAN OBUWIE",
    addressLabel: "Adres",
    hoursLabel: "Godziny otwarcia",
    hoursValue: "Wkrótce uzupełnimy",
    hoursNote: "Dane do potwierdzenia",
    emailLabel: "E-mail",
    emailValue: "Wkrótce uzupełnimy",
    emailNote: "Kontakt online pojawi się przed startem sklepu",
    comingEyebrow: "Nowy rozdział KLAN OBUWIE",
    comingTitle: "Wkrótce zakupy także przez internet",
    comingText: "Pracujemy nad uruchomieniem sklepu internetowego. Na tej stronie pojawi się pełna oferta, wygodne zamawianie oraz najważniejsze informacje o nowościach.",
    footerText: "Sklep internetowy w przygotowaniu"
  },
  uk: {
    pageTitle: "KLAN OBUWIE — інтернет-магазин незабаром",
    description: "KLAN OBUWIE — стаціонарний магазин. Інтернет-магазин незабаром.",
    navNews: "Новинки",
    navContact: "Контакти",
    navMap: "Як дістатися",
    navAbout: "Про компанію",
    storeType: "Стаціонарний магазин",
    heroTitle: "Гарне взуття.<br>Вдалий крок.",
    lead: "Ласкаво просимо до KLAN OBUWIE. Наш інтернет-магазин зараз готується до відкриття.",
    launchBadge: "Інтернет-магазин незабаром",
    photoAlt: "Фасад магазину взуття KLAN OBUWIE",
    addressLabel: "Адреса",
    hoursLabel: "Години роботи",
    hoursValue: "Незабаром доповнимо",
    hoursNote: "Дані очікують підтвердження",
    emailLabel: "E-mail",
    emailValue: "Незабаром доповнимо",
    emailNote: "Онлайн-контакт з’явиться до відкриття магазину",
    comingEyebrow: "Новий етап KLAN OBUWIE",
    comingTitle: "Незабаром покупки також онлайн",
    comingText: "Ми працюємо над запуском інтернет-магазину. Тут з’являться повний асортимент, зручне оформлення замовлень і найважливіша інформація про новинки.",
    footerText: "Інтернет-магазин готується до відкриття"
  },
  en: {
    pageTitle: "KLAN OBUWIE — online store coming soon",
    description: "KLAN OBUWIE — physical shoe store. Online store coming soon.",
    navNews: "New arrivals",
    navContact: "Contact",
    navMap: "Directions",
    navAbout: "About us",
    storeType: "Physical store",
    heroTitle: "Good shoes.<br>A good step.",
    lead: "Welcome to KLAN OBUWIE. Our online store is currently being prepared.",
    launchBadge: "Online store coming soon",
    photoAlt: "Front of the KLAN OBUWIE shoe store",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    hoursValue: "Coming soon",
    hoursNote: "Details to be confirmed",
    emailLabel: "E-mail",
    emailValue: "Coming soon",
    emailNote: "Online contact details will appear before the store launches",
    comingEyebrow: "A new chapter for KLAN OBUWIE",
    comingTitle: "Online shopping coming soon",
    comingText: "We are working on launching our online store. This website will feature our full range, convenient ordering and the latest information about new arrivals.",
    footerText: "Online store in preparation"
  }
};

function setLanguage(language) {
  const selected = translations[language] ? language : "pl";
  const copy = translations[selected];

  document.documentElement.lang = selected;
  document.title = copy.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", copy.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key] !== undefined) element.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key] !== undefined) element.innerHTML = copy[key];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (copy[key] !== undefined) element.setAttribute("alt", copy[key]);
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage("pl");
