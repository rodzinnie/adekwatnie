import {Container, Heading} from '../../common';
import styles from './index.module.scss'

function About() {
  return (
    <div className={styles.root}>
      <Container>
        <Heading variant='bckgRed'>O mnie</Heading>
      </Container>

    </div>
  )
}

export default About