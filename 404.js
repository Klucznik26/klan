(() => {
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

  const copy = {
    pl: {
      eyebrow: "Nie znaleźliśmy tej strony",
      title: "Wygląda na to, że te buty poszły inną drogą.",
      text: "Adres mógł się zmienić albo strona jeszcze nie istnieje. Najprościej wrócić do KLAN OBUWIE i wybrać właściwy kierunek.",
      back: "Wróć do KLAN OBUWIE"
    },
    uk: {
      eyebrow: "Ми не знайшли цю сторінку",
      title: "Схоже, це взуття пішло іншою дорогою.",
      text: "Адреса могла змінитися або сторінка ще не існує. Найпростіше повернутися до KLAN OBUWIE та обрати правильний напрямок.",
      back: "Повернутися до KLAN OBUWIE"
    },
    en: {
      eyebrow: "We could not find this page",
      title: "Looks like these shoes took a different path.",
      text: "The address may have changed or the page may not exist yet. The easiest way forward is to return to KLAN OBUWIE.",
      back: "Back to KLAN OBUWIE"
    }
  };

  const apply = (language) => {
    const selected = copy[language] ? language : "pl";
    document.documentElement.lang = selected;
    document.querySelectorAll("[data-error-i18n]").forEach((element) => {
      const key = element.dataset.errorI18n;
      if (copy[selected][key]) element.textContent = copy[selected][key];
    });
    document.querySelectorAll(".error-lang").forEach((button) => {
      button.classList.toggle("active", button.dataset.lang === selected);
    });
    try {
      localStorage.setItem("klanLanguage", selected);
    } catch (_) {}
  };

  let language = "pl";
  try {
    language = localStorage.getItem("klanLanguage") || "pl";
  } catch (_) {}
  apply(language);

  document.querySelectorAll(".error-lang").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang));
  });
})();