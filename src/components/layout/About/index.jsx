import { Awards, Carousel, Divider, Heading, SegmentHeader, Short, VoiceRecordings  } from '../../common'
import styles from './index.module.scss'

function About() {
  return (
    <section id='about' className={styles.root}>
      <SegmentHeader bgColor='lightBackground' variant='bgRed' title='o mnie' />
      <Short />
      <VoiceRecordings />
      <Awards />
      <section>
        <div className={styles.testimonials}>
          <Heading variant='bgLightBlue' headingLevel={'6'} text={'recenzje moich audiodeskrypcji'} />
          <Carousel timer={8000} />
        </div>
      </section>
      <Divider></Divider>
    </section>
  )
}

export default About
