if (typeof translations !== "undefined" && typeof setLanguage === "function") {
  Object.assign(translations.pl, {
    mapEyebrow: "Znajdź nas",
    mapTitle: "Mapka dojazdu",
    mapDescription: "Sklep KLAN OBUWIE znajduje się w centrum Nakła nad Notecią przy ul. Dąbrowskiego 15.",
    mapRoute: "Wyznacz trasę"
  });

  Object.assign(translations.uk, {
    mapEyebrow: "Знайдіть нас",
    mapTitle: "Як дістатися",
    mapDescription: "Магазин KLAN OBUWIE знаходиться в центрі Накло-над-Нотецю за адресою вул. Домбровського 15.",
    mapRoute: "Прокласти маршрут"
  });

  Object.assign(translations.en, {
    mapEyebrow: "Find us",
    mapTitle: "Directions",
    mapDescription: "KLAN OBUWIE is located in central Nakło nad Notecią at 15 Dąbrowskiego Street.",
    mapRoute: "Get directions"
  });

  let savedLanguage = "pl";
  try {
    savedLanguage = localStorage.getItem("klanLanguage") || "pl";
  } catch (_) {}
  setLanguage(savedLanguage);
}
