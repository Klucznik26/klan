(() => {
  const pages = {
    news: {
      pl: {
        title: "Nowości — KLAN OBUWIE",
        description: "Nowości KLAN OBUWIE — wkrótce nowe modele damskie i męskie.",
        eyebrow: "Nowe modele",
        heading: "Nowości",
        lead: "Przygotowujemy miejsce, w którym będziemy regularnie prezentować najnowsze modele dostępne w KLAN OBUWIE.",
        note: "Docelowo znajdą się tutaj dwie niezależne karuzele — z nowościami damskimi i męskimi.",
        status: "Sekcja w przygotowaniu",
        card1Title: "Nowości damskie",
        card1Text: "Nowe modele, kolory i propozycje dla kobiet.",
        card2Title: "Nowości męskie",
        card2Text: "Najnowsze modele i propozycje dla mężczyzn.",
        back: "Wróć na stronę główną"
      },
      uk: {
        title: "Новинки — KLAN OBUWIE",
        description: "Новинки KLAN OBUWIE — незабаром нові жіночі та чоловічі моделі.",
        eyebrow: "Нові моделі",
        heading: "Новинки",
        lead: "Ми готуємо місце, де регулярно показуватимемо найновіші моделі, доступні в KLAN OBUWIE.",
        note: "Тут з’являться дві окремі каруселі — з жіночими та чоловічими новинками.",
        status: "Розділ готується",
        card1Title: "Жіночі новинки",
        card1Text: "Нові моделі, кольори та пропозиції для жінок.",
        card2Title: "Чоловічі новинки",
        card2Text: "Найновіші моделі та пропозиції для чоловіків.",
        back: "Повернутися на головну"
      },
      en: {
        title: "New arrivals — KLAN OBUWIE",
        description: "KLAN OBUWIE new arrivals — new women's and men's styles coming soon.",
        eyebrow: "New styles",
        heading: "New arrivals",
        lead: "We are preparing a place where we will regularly present the newest styles available at KLAN OBUWIE.",
        note: "This page will feature two separate carousels — one for women's and one for men's new arrivals.",
        status: "Section in preparation",
        card1Title: "Women's new arrivals",
        card1Text: "New styles, colours and suggestions for women.",
        card2Title: "Men's new arrivals",
        card2Text: "The latest styles and suggestions for men.",
        back: "Back to the home page"
      }
    },
    trends: {
      pl: {
        title: "Trendy — KLAN OBUWIE",
        description: "Trendy KLAN OBUWIE — sezonowe inspiracje, kolory i modne kierunki w obuwiu.",
        eyebrow: "Inspiracje KLAN OBUWIE",
        heading: "Trendy",
        lead: "Ta część strony będzie naszym małym magazynem o modzie obuwniczej — bez przeładowania i bez przypadkowych treści.",
        note: "W karuzeli pojawią się sezonowe inspiracje, modne kolory, ciekawe fasony i propozycje stylizacji.",
        status: "Karuzela trendów w przygotowaniu",
        back: "Wróć na stronę główną"
      },
      uk: {
        title: "Тренди — KLAN OBUWIE",
        description: "Тренди KLAN OBUWIE — сезонні натхнення, кольори та модні напрямки у взутті.",
        eyebrow: "Натхнення KLAN OBUWIE",
        heading: "Тренди",
        lead: "Цей розділ стане нашим невеликим журналом про взуттєву моду — без перевантаження та випадкового контенту.",
        note: "У каруселі з’являться сезонні натхнення, модні кольори, цікаві фасони та ідеї стилізацій.",
        status: "Карусель трендів готується",
        back: "Повернутися на головну"
      },
      en: {
        title: "Trends — KLAN OBUWIE",
        description: "KLAN OBUWIE trends — seasonal inspiration, colours and footwear directions.",
        eyebrow: "KLAN OBUWIE inspiration",
        heading: "Trends",
        lead: "This section will become our small footwear fashion magazine — clean, focused and free of random content.",
        note: "The carousel will feature seasonal inspiration, fashionable colours, interesting shapes and styling ideas.",
        status: "Trends carousel in preparation",
        back: "Back to the home page"
      }
    },
    contact: {
      pl: {
        title: "Kontakt — KLAN OBUWIE",
        description: "Kontakt z KLAN OBUWIE w Nakle nad Notecią.",
        eyebrow: "KLAN OBUWIE",
        heading: "Kontakt",
        lead: "Pełne dane kontaktowe uzupełnimy po ich ostatecznym potwierdzeniu.",
        note: "Już teraz zapraszamy do sklepu stacjonarnego przy ul. Dąbrowskiego 15 w Nakle nad Notecią oraz na nasz profil na Facebooku.",
        status: "Dane kontaktowe w przygotowaniu",
        back: "Wróć na stronę główną"
      },
      uk: {
        title: "Контакти — KLAN OBUWIE",
        description: "Контакт з KLAN OBUWIE у Накло-над-Нотецю.",
        eyebrow: "KLAN OBUWIE",
        heading: "Контакти",
        lead: "Повні контактні дані ми додамо після їх остаточного підтвердження.",
        note: "Уже зараз запрошуємо до стаціонарного магазину на вул. Dąbrowskiego 15 у Накло-над-Нотецю та на наш профіль у Facebook.",
        status: "Контактні дані готуються",
        back: "Повернутися на головну"
      },
      en: {
        title: "Contact — KLAN OBUWIE",
        description: "Contact KLAN OBUWIE in Nakło nad Notecią.",
        eyebrow: "KLAN OBUWIE",
        heading: "Contact",
        lead: "We will add the full contact details once they have been finally confirmed.",
        note: "You can already visit our physical store at 15 Dąbrowskiego Street in Nakło nad Notecią or find us on Facebook.",
        status: "Contact details in preparation",
        back: "Back to the home page"
      }
    },
    about: {
      pl: {
        title: "O firmie — KLAN OBUWIE",
        description: "O firmie KLAN OBUWIE — sklep obuwniczy w Nakle nad Notecią.",
        eyebrow: "Poznaj KLAN OBUWIE",
        heading: "O firmie",
        lead: "Przygotowujemy tę część strony, aby opowiedzieć o KLAN OBUWIE własnymi słowami i bez marketingowych ogólników.",
        note: "Gdy treść będzie gotowa, znajdzie się tutaj krótka historia sklepu, jego podejście do klientów i to, co wyróżnia KLAN OBUWIE.",
        status: "Historia firmy w przygotowaniu",
        back: "Wróć na stronę główną"
      },
      uk: {
        title: "Про компанію — KLAN OBUWIE",
        description: "Про KLAN OBUWIE — магазин взуття в Накло-над-Нотецю.",
        eyebrow: "Познайомтеся з KLAN OBUWIE",
        heading: "Про компанію",
        lead: "Ми готуємо цей розділ, щоб розповісти про KLAN OBUWIE власними словами, без загальних маркетингових фраз.",
        note: "Тут з’явиться коротка історія магазину, його підхід до клієнтів і те, що вирізняє KLAN OBUWIE.",
        status: "Історія компанії готується",
        back: "Повернутися на головну"
      },
      en: {
        title: "About us — KLAN OBUWIE",
        description: "About KLAN OBUWIE — a shoe store in Nakło nad Notecią.",
        eyebrow: "Meet KLAN OBUWIE",
        heading: "About us",
        lead: "We are preparing this section so the story of KLAN OBUWIE can be told in its own words, without generic marketing language.",
        note: "It will include a short history of the store, its approach to customers and what makes KLAN OBUWIE distinctive.",
        status: "Our story is in preparation",
        back: "Back to the home page"
      }
    }
  };

  const page = document.body.dataset.page;
  const pageCopy = pages[page];
  if (!pageCopy) return;

  const apply = (language) => {
    const selected = pageCopy[language] ? language : "pl";
    const copy = pageCopy[selected];

    document.documentElement.lang = selected;
    document.title = copy.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.description);

    document.querySelectorAll("[data-section-i18n]").forEach((element) => {
      const key = element.dataset.sectionI18n;
      if (copy[key]) element.textContent = copy[key];
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

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => apply(button.dataset.lang));
  });
})();
