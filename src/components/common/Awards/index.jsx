import Container from '../Container/index'
import Heading from '../Heading/index'
import styles from './index.module.scss'

const Awards = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.myPic}>
          <p>img</p>
        </div>
        <div className={styles.aboutMe}>
          <Heading variant='bgRed'>
            <h2>N</h2>
          </Heading>
          <h6>
            azywam się Jagoda Grudzień i adekwatne teksty to moja pasja: tworzę
            audiodeskrypcje do filmów fabularnych i dokumentalnych, przestrzeni
            wystawienniczych, dzieł sztuki, spektakli operowych. Zajmuję się
            także czytaniem audiodeskrypcji na żywo oraz nagrywaniem.
          </h6>
        </div>
      </Container>
    </section>
  )
}

export default Awards
