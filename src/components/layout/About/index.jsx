import {Container, Heading, TilesContainer} from '../../common';
import styles from './index.module.scss'
const list = [
  {title: 'Próbka Głosu 1', buttons: ['play', 'stop'], variant: 'darkBlue'},
  {title: 'Próbka Głosu 2', buttons: ['play', 'stop'], variant: 'lightBlue'},
  {title: 'Próbka Głosu 3', buttons: ['play', 'stop'], variant: 'red'}
]
function About() {
  return (
    <div className={styles.root}>
      <Container>
        <Heading variant='bckgRed'>O mnie</Heading>
        <div className={styles.myPic}>
          <p>img</p>
        </div>
        <p className={styles.aboutMe}>Nazywam się Jagoda Grudzień i adekwatne teksty to moja pasja: tworzę audiodeskrypcje do filmów fabularnych i dokumentalnych, przestrzeni wystawienniczych, dzieł sztuki, spektakli operowych. Zajmuję się także czytaniem audiodeskrypcji na żywo oraz nagrywaniem.</p>
      </Container>
      <TilesContainer list={list} heading='tak brzmi mój głos' headingColor='lightBlue'/>
    </div>
  )
}

export default About