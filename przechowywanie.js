const storageGuideMeta = {
  pl: {
    title: "Jak przechowywać buty? — KLAN OBUWIE",
    description: "Jak prawidłowo przechowywać buty? Poradnik KLAN OBUWIE o czyszczeniu, suszeniu, prawidłach i przechowywaniu obuwia między sezonami."
  },
  uk: {
    title: "Як зберігати взуття? — KLAN OBUWIE",
    description: "Поради KLAN OBUWIE щодо правильного очищення, сушіння та зберігання взуття між сезонами."
  },
  en: {
    title: "How to store shoes? — KLAN OBUWIE",
    description: "KLAN OBUWIE guide to cleaning, drying, shaping and storing footwear between seasons."
  }
};

function applyStorageGuideLanguage(language) {
  const selected = storageGuideMeta[language] ? language : "pl";
  document.documentElement.lang = selected === "uk" ? "uk" : selected;
  document.title = storageGuideMeta[selected].title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", storageGuideMeta[selected].description);

  document.querySelectorAll("[data-storage-lang]").forEach((section) => {
    section.hidden = section.dataset.storageLang !== selected;
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
  button.addEventListener("click", () => applyStorageGuideLanguage(button.dataset.lang));
});

let storageGuideLanguage = "pl";
try {
  storageGuideLanguage = localStorage.getItem("klanLanguage") || "pl";
} catch (_) {}
applyStorageGuideLanguage(storageGuideLanguage);
