import type { Dict } from './types';

// Strings may contain simple inline HTML (<em>, <strong>, <br>). They are trusted, not user input.
export const pl: Dict = {
  meta: {
    title: 'Azure Ocean Strategy — doradztwo biznesowe dla branży IT',
    description:
      'Strategia, dostarczanie i operacje wspierane przez AI dla firm software’owych i liderów technologicznych. Przestań walczyć na czerwonym oceanie — twórz wartość, której nikt inny nie oferuje.',
    ogLocale: 'pl_PL',
  },
  nav: {
    services: 'Usługi',
    approach: 'Podejście',
    about: 'O nas',
    contact: 'Kontakt',
    menu: 'Menu',
    switchTo: 'English',
  },
  cta: {
    book: 'Umów rozmowę wstępną',
    bookShort: 'Umów rozmowę',
    secondary: 'Zobacz, jak pracujemy',
    emailSubject: 'Rozmowa wstępna — Azure Ocean Strategy',
  },
  hero: {
    eyebrow: 'Doradztwo biznesowe dla branży IT',
    title: 'Wypłyń z czerwonego oceanu.<br><span class="text-azure-600">Wyznacz kurs na lazurowy.</span>',
    lead:
      'Azure Ocean Strategy pomaga firmom software’owym i liderom technologicznym przestać konkurować stawką dzienną i liczbą ceremonii — i zacząć tworzyć wartość, której nikt inny nie oferuje: dzięki trafniejszej strategii, spokojniejszemu dostarczaniu i operacjom wspieranym przez AI.',
    canvas: {
      title: 'Kanwa strategii',
      caption: 'Gdzie konkuruje większość firm IT, a gdzie naprawdę powstaje wartość.',
      factors: ['Stawka', 'Proces', 'Liczba osób', 'Automatyzacja', 'Przewidywalność', 'Odpowiedzialność'],
      industry: 'Typowy dostawca IT',
      azure: 'Azure Ocean',
      low: 'nisko',
      high: 'wysoko',
    },
  },
  oceans: {
    eyebrow: 'Idea',
    title: 'Większość firm IT walczy na czerwonym oceanie.',
    lead:
      'Te same usługi, te same frameworki, te same prezentacje — konkurencja ceną, podczas gdy dostarczanie tonie w procesach. <em>Strategia błękitnego oceanu</em> podpowiada, że zamiast walczyć mocniej, trzeba narysować mapę od nowa. Przenosimy tę dyscyplinę na to, jak firmy IT sprzedają, dostarczają i działają na co dzień.',
    red: {
      label: 'Czerwony ocean',
      items: [
        'Konkurowanie stawką',
        'Więcej procesu na naprawę procesu',
        'Mierzenie aktywności zamiast efektów',
        'Skalowanie liczbą etatów',
      ],
    },
    azure: {
      label: 'Lazurowy ocean',
      items: [
        'Konkurowanie unikalną wartością',
        'Usuwanie tego, co nie tworzy wartości',
        'Mierzenie przepływu, marży i efektów',
        'Skalowanie automatyzacją i dźwignią',
      ],
    },
    errcTitle: 'Siatka ERRC w praktyce dostarczania IT',
    errcLead: 'Cztery pytania ze Strategii błękitnego oceanu, które zadajemy przy każdym projekcie.',
    errc: [
      {
        key: 'Eliminuj',
        title: 'Co powinno zniknąć?',
        body: 'Rytuały utrzymywane dla samych rytuałów, spotkania statusowe o spotkaniach statusowych, teatr frameworków.',
      },
      {
        key: 'Redukuj',
        title: 'Co powinno się zmniejszyć?',
        body: 'Narzut koordynacyjny, przekazania pracy, praca w toku, raporty składane ręcznie.',
      },
      {
        key: 'Podnoś',
        title: 'Co powinno urosnąć?',
        body: 'Przewidywalność, widoczność kosztów i marży, tempo decyzji, prawdziwa odpowiedzialność.',
      },
      {
        key: 'Twórz',
        title: 'Czego brakuje?',
        body: 'Nowe linie usług, produktowe oferty i operacje wspierane przez AI, które uwalniają ludzi do pracy wymagającej osądu.',
      },
    ],
  },
  services: {
    eyebrow: 'Usługi',
    title: 'Cztery obszary współpracy',
    lead: 'Każde zlecenie ma jasno określony cel. Wybierz jeden obszar albo połącz kilka.',
    items: [
      {
        title: 'Strategia i pozycjonowanie',
        tagline: 'Znajdź swój błękitny ocean.',
        body:
          'Dla software house’ów i firm usługowych IT, które za bardzo przypominają konkurencję. Mapujemy rynek, rysujemy na nowo krzywą wartości i zamieniamy ją w ofertę, którą klienci mogą kupić.',
        points: ['Kanwa strategii i krzywa wartości', 'Produktowe oferty usług', 'Modele cenowe poza time & materials'],
      },
      {
        title: 'Dostarczanie i operacje',
        tagline: 'Przewidywalne dostarczanie, bez teatru.',
        body:
          'Uczciwe spojrzenie na to, jak naprawdę płynie praca: kondycja portfela i projektów, planowanie zasobów i ławka, marże i utylizacja — oraz sposób pracy dopasowany do zespołów, a nie do frameworka.',
        points: ['Przegląd kondycji dostarczania i portfela', 'Planowanie zasobów i mocy', 'Widoczność marży i utylizacji'],
      },
      {
        title: 'AI i automatyzacja',
        tagline: 'Nudne rzeczy na autopilocie.',
        body:
          'Praktyczne agenty AI i integracje między CRM, planowaniem zasobów, finansami i narzędziami do współpracy — żeby raporty, uzgodnienia i przekazania działy się bez gonienia ludzi.',
        points: ['Mapa drogowa automatyzacji operacji', 'Agenty AI i integracje systemów', 'Automatyczne raporty i dashboardy'],
      },
      {
        title: 'Mentoring',
        tagline: 'Sparingpartner dla liderów.',
        body:
          'Mentoring 1:1 dla delivery leadów, project managerów, engineering managerów i założycieli wchodzących w operacje. Prawdziwe decyzje, szczera informacja zwrotna, zero certyfikatów.',
        points: ['Regularne sesje 1:1', 'Coaching przywództwa i dostarczania', 'Przegląd bieżących decyzji i planów'],
      },
    ],
  },
  approach: {
    eyebrow: 'Podejście',
    title: 'Od diagnozy do przekazania',
    lead: 'Krótkie cykle, prawdziwe dane i działające rezultaty zamiast raportu na półkę.',
    steps: [
      {
        title: 'Diagnoza',
        body: 'Zaczynamy od faktów — lejka sprzedaży, dostarczania, marż, kalendarzy — i od ludzi, którzy wykonują pracę.',
      },
      {
        title: 'Projekt',
        body: 'Skupiony plan: co wyeliminować, zredukować, podnieść i stworzyć. Niewiele ruchów, jasni właściciele, mierzalne efekty.',
      },
      {
        title: 'Wdrożenie',
        body: 'Wdrażamy razem z Twoim zespołem: procesy, narzędzia i automatyzacje, nie tylko slajdy.',
      },
      {
        title: 'Przekazanie',
        body: 'Rezultat należy do Twojego zespołu — z działającymi systemami, dokumentacją i umiejętnościami do dalszego doskonalenia.',
      },
    ],
    principles: [
      { title: 'Bez dogmatów', body: 'Używamy tego, co działa w Twoim kontekście, i odpuszczamy resztę.' },
      { title: 'Doświadczenie w praktyce', body: 'Osoba, która określa zakres prac, jest osobą, która je wykonuje.' },
      { title: 'Rozliczani z efektów', body: 'Kryteria sukcesu ustalamy na początku, w liczbach, które już mierzysz.' },
    ],
  },
  about: {
    eyebrow: 'O nas',
    title: 'Niezależna firma doradcza znad Bałtyku',
    body: [
      'Azure Ocean Strategy to niezależna firma doradcza dla branży IT z siedzibą pod Gdańskiem. Pracujemy z firmami software’owymi, dostawcami usług IT i zespołami technologicznymi — po polsku i po angielsku.',
      'Nazwa nawiązuje do <em>Strategii błękitnego oceanu</em>: najlepszy sposób na konkurencję to przestać konkurować na tych samych warunkach.',
    ],
    founderLabel: 'Założyciel: Krzysztof Wasilewski',
    founderBio:
      'Krzysztof działa tam, gdzie spotykają się strategia biznesowa, dostarczanie oprogramowania i codzienne operacje — i nie ma cierpliwości do procesów, które się nie zwracają.',
    linkedin: 'Profil na LinkedIn',
    facts: [
      { label: 'Języki pracy', value: 'polski, angielski' },
      { label: 'Siedziba', value: 'Pomorze' },
      { label: 'Współpraca', value: 'zdalnie i na miejscu' },
    ],
  },
  unfiltered: {
    title: 'Wersja bez filtra',
    before:
      'Strony firm doradczych bywają uprzejme. Projekty poboczne założyciela — już nie. Szczere zdanie o cargo-cult agile, stand-upach i iluzji zakresu znajdziesz na',
    and: 'i',
    after: '— a potem wróć tutaj, gdy zechcesz to naprawić.',
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Gotowi narysować mapę od nowa?',
    body: 'Umów 30-minutową rozmowę wstępną. Porozmawiamy o tym, gdzie jesteś, gdzie jest Twój czerwony ocean i czy pasujemy do siebie.',
    or: 'albo napisz na',
  },
  footer: {
    tagline: 'Doradztwo biznesowe dla branży IT — strategia, dostarczanie i operacje wspierane przez AI.',
    legal: 'Dane firmy',
    nip: 'NIP',
    regon: 'REGON',
    rights: 'Wszelkie prawa zastrzeżone.',
  },
  notFound: {
    title: 'Zagubieni na morzu',
    body: 'Strony, której szukasz, tu nie ma.',
    back: 'Wróć na stronę główną',
  },
};
