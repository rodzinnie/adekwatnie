import { Awards, Carousel, Divider, Heading, SegmentHeader, Short, VoiceRecordings  } from '../../common'
import styles from './index.module.scss'

function About() {
  return (
    <section id='about' className={styles.root}>
      <SegmentHeader bgColor='lightBackground' variant='bgRed' title='o mnie' />
      <Short />
      <VoiceRecordings />
      <Awards />
      {/* <section className={styles.lightBackground}>
        <Heading variant='bgLightBlue'>
          <h3>Pisanie i szkolenia</h3>
        </Heading>
      </section> */}
      <section>
        <div className={styles.testimonials}>
          <Heading variant='bgLightBlue' headingLevel={'3'} text={'recenzje moich audiodeskrypcji'} />
          <Carousel timer={5000} />
        </div>
      </section>
      <Divider></Divider>
    </section>
  )
}

export default About
