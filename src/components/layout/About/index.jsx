import { Awards, Carousel, Container, Heading, SegmentHeader, Short, VoiceRecords  } from '../../common'
import styles from './index.module.scss'
import { list , testimonials} from './data'

function About() {
  return (
    <section id='about' className={styles.root}>
      <SegmentHeader bgColor='lightBackground' variant='bgRed' title='o mnie' />
      <Short />
      <VoiceRecords list={list} />
      <Awards />
      {/* <section className={styles.lightBackground}>
        <Heading variant='bgLightBlue'>
          <h3>Pisanie i szkolenia</h3>
        </Heading>
      </section> */}
      <section>
        <div className={styles.testimonials}>
          <Heading variant='bgLightBlue'>
            <h3>recenzje moich audiodeskrypcji</h3>
          </Heading>
          <Carousel slides={testimonials} timer={5000} />
        </div>
      </section>
    </section>
  )
}

export default About
