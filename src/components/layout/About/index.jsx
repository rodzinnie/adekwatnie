import { Carousel, Container, Heading, SegmentHeader, Short, VoiceRecords  } from '../../common'
import styles from './index.module.scss'
import { list , testimonials} from './data'

function About() {
  return (
    <section id='about' className={styles.root}>
      <SegmentHeader bgColor='lightBackground' variant='bgRed' title='o mnie' />
      <Short />
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
      {/* <section className={styles.lightBackground}>
        <Heading variant='bgLightBlue'>
          <h3>Pisanie i szkolenia</h3>
        </Heading>
      </section> */}
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
