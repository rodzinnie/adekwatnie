import { Carousel, Container, Heading, TilesContainer } from '../../common'
import styles from './index.module.scss'
import VoiceRecords from '../../common/VoiceRecords/index'
import SegmentHeader from '../../common/SegmentHeader/index'
const list = [
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

const testimonials = [
  'Obejrzałam ten film, ale powiem, że bez szczególnych emocji. Nic mnie w tym filmie zbytnio nie poruszyło. Jedynym pozytywem dla mnie jest bardzo dobrze zrobiona i przeczytana audiodeskrypcja, bo bez niej chyba nie dotrwałabym do końca filmu (H.U., recenzja filmu Śniegu już nigdy nie będzie)',
  'Audiodeskrypcja sporządzona i przeczytana na najwyższym poziomie. Brawo (U.N., recenzja filmu Śniegu już nigdy nie będzie)',
  'W jak widoki – są piękne, co znakomicie oddała bardzo dobra audiodeskrypcja (E.G., recenzja filmu Psie pazury)',
  'Jeśli mowa o postaciach, to Phil od początku filmu wydawał mi się zły – czy tego chciała autorka, żebyśmy patrzyli ze złością na tego kowboja i myśleli „on coś kombinuje coś złego?. Dużo dawała też barwna, a jednocześnie informująca o przebiegu akcji audiodeskrypcja…” (J.M., recenzja filmu Psie pazury)',
]

function About() {
  return (
    <section id='about' className={styles.root}>
      <SegmentHeader bgColor='lightBackground' variant='bgRed' title='o mnie' />
      <Container>
        <Heading variant='bgRed'>
          <h2>O mnie</h2>
        </Heading>
        <div className={styles.myPic}>
          <p>img</p>
        </div>
        <p className={styles.aboutMe}>
          Nazywam się Jagoda Grudzień i adekwatne teksty to moja pasja: tworzę
          audiodeskrypcje do filmów fabularnych i dokumentalnych, przestrzeni
          wystawienniczych, dzieł sztuki, spektakli operowych. Zajmuję się także
          czytaniem audiodeskrypcji na żywo oraz nagrywaniem.
        </p>
      </Container>
      <VoiceRecords list={list} />
      <section>
        <Container>
          <Heading variant='bgRed'>
            <h3>nagrody</h3>
          </Heading>
          <p className={styles.paraLeft}>
            2022: I miejsce w konkursie na najlepszą audiodeskrypcję filmową na
            XII Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku
            (Poufne lekcje perskiego, reż. V. Perelman)
          </p>
          <p className={styles.paraRight}>
            2022: wyróżnienie w konkursie dla krytyczek i krytyków filmowych im.
            Krzysztofa Mętraka (tekst pt. Dziennik przekł.AD.owy)
          </p>
          <p className={styles.paraLeft}>
            2021: I miejsce w konkursie na najlepszą audiodeskrypcję filmową na
            XI Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku
            (SWEAT, reż. Magnus von Horn)
          </p>
          <p className={styles.paraRight}>
            2020: II miejsce w konkursie na najlepszą audiodeskrypcję filmową na
            X Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku (Wysoka
            dziewczyna, reż. K. Bałagow)
          </p>
        </Container>
      </section>
      <section className={styles.lightBackground}>
        <Heading variant='bgLightBlue'>
          <h3>Pisanie i szkolenia</h3>
        </Heading>
      </section>
      <section>
        <Container>
          <Heading variant='bgLightBlue'>
            <h3>recenzje moich audiodeskrypcji</h3>
          </Heading>
          <Carousel slides={testimonials} timer={5000} arrows={true} />
        </Container>
      </section>
    </section>
  )
}

export default About
