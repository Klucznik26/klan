if (typeof translations !== "undefined" && typeof setLanguage === "function") {
  translations.pl.adviceCard1Text = "Dowiedz się, jak zmierzyć stopę, dobrać odpowiednią tęgość i porównać rozmiary EU, UK oraz US.";
  translations.uk.adviceCard1Text = "Дізнайтеся, як виміряти стопу, підібрати відповідну повноту та порівняти розміри EU, UK і US.";
  translations.en.adviceCard1Text = "Learn how to measure your foot, choose the right width and compare EU, UK and US sizes.";

  let savedLanguage = "pl";
  try {
    savedLanguage = localStorage.getItem("klanLanguage") || "pl";
  } catch (_) {}
  setLanguage(savedLanguage);
}
