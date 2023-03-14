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
  'Obejrzałam ten film, ale powiem, że bez szczególnych emocji. Nic mnie w tym filmie zbytnio nie poruszyło. Jedynym pozytywem dla mnie jest bardzo dobrze zrobiona i przeczytana audiodeskrypcja, bo bez niej chyba nie dotrwałabym do końca filmu (H.U., recenzja filmu Śniegu już nigdy nie będzie)',
  'Audiodeskrypcja sporządzona i przeczytana na najwyższym poziomie. Brawo (U.N., recenzja filmu Śniegu już nigdy nie będzie)',
  'W jak widoki – są piękne, co znakomicie oddała bardzo dobra audiodeskrypcja (E.G., recenzja filmu Psie pazury)',
  'Jeśli mowa o postaciach, to Phil od początku filmu wydawał mi się zły – czy tego chciała autorka, żebyśmy patrzyli ze złością na tego kowboja i myśleli „on coś kombinuje coś złego?. Dużo dawała też barwna, a jednocześnie informująca o przebiegu akcji audiodeskrypcja…” (J.M., recenzja filmu Psie pazury)',
]

fetchedData.offerList = [
  {
    title: 'Audiodeskrypcje Filmowe',
    text: 'Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
  {
    title: 'Audiodeskrypcje Teatralne',
    text: '1Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Audiodeskrypcje Eventów',
    text: '2Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Nagrywanie Ścieżek',
    text: '3Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Voiceover - lektorka na żywo',
    text: '4Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Szkolenia',
    text: '5Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
]


export default fetchedData