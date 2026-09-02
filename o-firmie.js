(() => {
  const copy = {
    pl: {
      title: "O firmie — KLAN OBUWIE",
      description: "Poznaj KLAN OBUWIE — wielopokoleniowy sklep obuwniczy z 30-letnim doświadczeniem w Nakle nad Notecią.",
      eyebrow: "Poznaj KLAN OBUWIE",
      heading: "O firmie",
      yearsLabel: "lat doświadczenia",
      story1: "Od 30 lat jesteśmy częścią lokalnej społeczności. Jako firma wielopokoleniowa pomagamy mieszkańcom naszego miasta wybierać obuwie, które łączy wygodę, jakość i trwałość.",
      story2: "Stawiamy przede wszystkim na komfort i sprawdzoną jakość. Współpracujemy z producentami, których znamy i którym ufamy, wybierając modele cenione za solidne wykonanie, trwałość i niezawodność.",
      story3: "Do każdego zamówienia podchodzimy z dużą uwagą. Zanim nowy model trafi do naszej oferty, nasi pracownicy sami go przymierzają i oceniają jego wygodę, dopasowanie oraz wykonanie. Dzięki temu możemy oferować naszym klientom buty, które sami uznajemy za warte polecenia.",
      story4: "KLAN OBUWIE to nie tylko sklep — to 30 lat doświadczenia, znajomości potrzeb naszych klientów i codziennego dbania o to, aby każdy mógł wyjść od nas w dobrych butach.",
      back: "Wróć na stronę główną"
    },
    uk: {
      title: "Про компанію — KLAN OBUWIE",
      description: "Познайомтеся з KLAN OBUWIE — сімейним взуттєвим магазином із 30-річним досвідом у Накло-над-Нотецю.",
      eyebrow: "Познайомтеся з KLAN OBUWIE",
      heading: "Про компанію",
      yearsLabel: "років досвіду",
      story1: "Вже 30 років ми є частиною місцевої спільноти. Як сімейна компанія кількох поколінь, ми допомагаємо мешканцям нашого міста обирати взуття, яке поєднує комфорт, якість і довговічність.",
      story2: "Насамперед ми ставимо на комфорт і перевірену якість. Ми співпрацюємо з виробниками, яких знаємо і яким довіряємо, обираючи моделі, що цінуються за добротне виконання, міцність і надійність.",
      story3: "До кожного замовлення ми ставимося дуже уважно. Перш ніж нова модель потрапить до нашої пропозиції, наші працівники самі її приміряють і оцінюють комфорт, посадку та якість виконання. Завдяки цьому ми можемо пропонувати клієнтам взуття, яке самі вважаємо гідним рекомендації.",
      story4: "KLAN OBUWIE — це не просто магазин. Це 30 років досвіду, знання потреб наших клієнтів і щоденна турбота про те, щоб кожен виходив від нас у хорошому взутті.",
      back: "Повернутися на головну"
    },
    en: {
      title: "About us — KLAN OBUWIE",
      description: "Meet KLAN OBUWIE — a multi-generation shoe store with 30 years of experience in Nakło nad Notecią.",
      eyebrow: "Meet KLAN OBUWIE",
      heading: "About us",
      yearsLabel: "years of experience",
      story1: "For 30 years we have been part of our local community. As a multi-generation family business, we help people in our town choose footwear that combines comfort, quality and durability.",
      story2: "Above all, we focus on comfort and proven quality. We work with manufacturers we know and trust, choosing models valued for solid workmanship, durability and reliability.",
      story3: "We approach every order with great care. Before a new model joins our range, our staff try it on themselves and assess its comfort, fit and workmanship. This allows us to offer our customers shoes that we genuinely believe are worth recommending.",
      story4: "KLAN OBUWIE is more than a store — it is 30 years of experience, understanding our customers' needs and taking care every day to make sure everyone leaves us in good shoes.",
      back: "Back to the home page"
    }
  };

  const apply = (language) => {
    const selected = copy[language] ? language : "pl";
    const current = copy[selected];

    document.documentElement.lang = selected;
    document.title = current.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", current.description);

    document.querySelectorAll("[data-section-i18n]").forEach((element) => {
      const key = element.dataset.sectionI18n;
      if (current[key]) element.textContent = current[key];
    });

    document.querySelectorAll(".lang-button").forEach((button) => {
      const active = button.dataset.lang === selected;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
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
