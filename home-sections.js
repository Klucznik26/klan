(() => {
  const copy = {
    pl: {
      offerEyebrow: "Nasza oferta",
      offerTitle: "Znajdź coś dla siebie",
      offerLead: "Pełną ofertę zobaczysz w naszym sklepie stacjonarnym w Nakle nad Notecią. Sklep internetowy jest w przygotowaniu.",
      offerWomen: "Damskie",
      offerWomenText: "Obuwie na co dzień, do pracy i na wyjątkowe okazje.",
      offerMen: "Męskie",
      offerMenText: "Klasyczne i codzienne modele dobrane do różnych potrzeb.",
      offerSport: "Sportowe",
      offerSportText: "Wygodne obuwie do aktywnego dnia i swobodnych stylizacji.",
      offerAccessories: "Akcesoria",
      offerAccessoriesText: "Dodatki i produkty pomocne w codziennym użytkowaniu obuwia."
    },
    uk: {
      offerEyebrow: "Наша пропозиція",
      offerTitle: "Знайдіть щось для себе",
      offerLead: "Повний асортимент ви побачите в нашому стаціонарному магазині в Накло-над-Нотецю. Інтернет-магазин готується до запуску.",
      offerWomen: "Жіноче",
      offerWomenText: "Взуття на щодень, для роботи та особливих подій.",
      offerMen: "Чоловіче",
      offerMenText: "Класичні та повсякденні моделі для різних потреб.",
      offerSport: "Спортивне",
      offerSportText: "Зручне взуття для активного дня та невимушених образів.",
      offerAccessories: "Аксесуари",
      offerAccessoriesText: "Додатки та товари, корисні у щоденному користуванні взуттям."
    },
    en: {
      offerEyebrow: "Our offer",
      offerTitle: "Find something for you",
      offerLead: "See our full range in our physical store in Nakło nad Notecią. The online store is currently in preparation.",
      offerWomen: "Women",
      offerWomenText: "Shoes for everyday wear, work and special occasions.",
      offerMen: "Men",
      offerMenText: "Classic and everyday styles for different needs.",
      offerSport: "Sport",
      offerSportText: "Comfortable footwear for active days and casual looks.",
      offerAccessories: "Accessories",
      offerAccessoriesText: "Accessories and products useful in everyday shoe care and use."
    }
  };

  const apply = (language) => {
    const selected = copy[language] ? language : "pl";
    document.querySelectorAll("[data-home-i18n]").forEach((element) => {
      const key = element.dataset.homeI18n;
      if (copy[selected][key]) element.textContent = copy[selected][key];
    });
  };

  let language = "pl";
  try {
    language = localStorage.getItem("klanLanguage") || "pl";
  } catch (_) {}
  apply(language);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang));
  });
})();