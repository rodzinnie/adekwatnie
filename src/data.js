const fetchedData = {}
fetchedData.navbar = [
  {href: '#offer', name: 'offer', namePl: 'oferta'},
  {href: '#about', name: 'about', namePl: 'o mnie'},
  {href: '#contact', name: 'contact', namePl: 'kontakt'},
]
fetchedData.recordings = [
  {
    title: 'Próbka Głosu 1',
    buttons: [
      { name: 'play', fill: '#e63946' },
      { name: 'stop', fill: '#e63946' },
    ],
    variant: 'darkBlue',
  },
  {
    title: 'Próbka Głosu 2',
    buttons: [
      { name: 'play', fill: '#e63946' },
      { name: 'stop', fill: '#e63946' },
    ],
    variant: 'lightBlue',
  },
  {
    title: 'Próbka Głosu 3',
    buttons: [
      { name: 'play', fill: '#e63946' },
      { name: 'stop', fill: '#e63946' },
    ],
    variant: 'red',
  },
]

fetchedData.testimonials = [
  'Obejrzałam ten film, ale powiem, że bez szczególnych emocji. Nic mnie w tym filmie zbytnio nie poruszyło. Jedynym pozytywem dla mnie jest bardzo dobrze zrobiona i przeczytana audiodeskrypcja, bo bez niej chyba nie dotrwałabym do końca filmu <div>H.U., recenzja filmu Śniegu już nigdy nie będzie</div>',
  'Audiodeskrypcja sporządzona i przeczytana na najwyższym poziomie. Brawo <div>U.N., recenzja filmu Śniegu już nigdy nie będzie</div>',
  '<em>W</em> jak widoki – są piękne, co znakomicie oddała bardzo dobra audiodeskrypcja <div>E.G., recenzja filmu Psie pazury</div>',
  'Jeśli mowa o postaciach, to Phil od początku filmu wydawał mi się zły – czy tego chciała autorka, żebyśmy patrzyli ze złością na tego kowboja i myśleli „on coś kombinuje coś złego?. Dużo dawała też barwna, a jednocześnie informująca o przebiegu akcji audiodeskrypcja…” <div>J.M., recenzja filmu Psie pazury</div>',
]

fetchedData.offerList = [
  {
    title: 'Audiodeskrypcje Filmowe',
    text: 'adekwatne audiodeskrypcje rozumieją zarówno dzieło filmowe, jak i potrzeby odbiorców. Mam kilkuletnie doświadczenie w łączeniu tych dwóch perspektyw, a moje działania nagrodzili niewidomi kinomani, a także filmowcy.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
  {
    title: 'Audiodeskrypcje Teatralne',
    text: 'adekwatne audiodeskrypcje pozostają elastyczne, bo teatr to żywioł, zwłaszcza współczesny. Mam wykształcenie teatrologiczne i potrafię sprostać temu zadaniu.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Audiodeskrypcje Eventów',
    text: 'Dostępna premiera bądź koncert? Z przyjemnością adekwatnie dostosuję event do potrzeb odbiorców niewidomych i słabowidzących, również z audiodeskrypcją na żywo w każdym miejscu Polski.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Nagrywanie Ścieżek',
    text: 'Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Voice over - lektorka na żywo',
    text: 'Jeśli potrzebujesz, by niewidomi i słabowidzący odbiorcy usłyszeli tekst audiodeskrypcji na żywo, pisz śmiało. Adaptuję gotowe teksty audiodeskrypcji na miejscu i nigdy nie tracę zimnej krwi, gdy trzeba improwizować.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Szkolenia',
    text: 'Od kilku lat szkolę w zakresie pisania audiodeskrypcji oraz szeroko pojętej dostępności kultury online i na żywo. Chętnie podzielę się wiedzą zarówno z pracownikami instytucji kultury, jak i osobami, które chcą zacząć indywidualną przygodę z dostępnością.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
]


export default fetchedData