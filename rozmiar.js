const sizeGuideMeta = {
  pl: {
    title: "Jak dobrać właściwy rozmiar? — KLAN OBUWIE",
    description: "Jak dobrać właściwy rozmiar obuwia? Poradnik KLAN OBUWIE o mierzeniu stopy, tęgości oraz rozmiarach EU, UK i US."
  },
  uk: {
    title: "Як правильно підібрати розмір? — KLAN OBUWIE",
    description: "Поради KLAN OBUWIE щодо вимірювання стопи, повноти взуття та розмірів EU, UK і US."
  },
  en: {
    title: "How to choose the right shoe size? — KLAN OBUWIE",
    description: "KLAN OBUWIE guide to measuring your feet, shoe width and EU, UK and US sizing."
  }
};

function applySizeGuideLanguage(language) {
  const selected = sizeGuideMeta[language] ? language : "pl";

  document.documentElement.lang = selected === "uk" ? "uk" : selected;
  document.title = sizeGuideMeta[selected].title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", sizeGuideMeta[selected].description);

  document.querySelectorAll("[data-size-lang]").forEach((section) => {
    section.hidden = section.dataset.sizeLang !== selected;
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("klanLanguage", selected);
  } catch (_) {}
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => applySizeGuideLanguage(button.dataset.lang));
});

let sizeGuideLanguage = "pl";
try {
  sizeGuideLanguage = localStorage.getItem("klanLanguage") || "pl";
} catch (_) {}
applySizeGuideLanguage(sizeGuideLanguage);
