import Container from '../Container/index'
import Heading from '../Heading/index'
import styles from './index.module.scss'

const Short = () => {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.myPic}>
          <p>img</p>
        </div>
        <div className={styles.aboutMe}>
          <h6 className={styles.blurb}>
          <Heading variant='bgRedRmMargin'>
            <h2>N</h2>
          </Heading><span className={styles.blurbSpan}>azywam się Jagoda Grudzień i <span className='ad'>ad</span>ekwatne teksty to moja pasja: tworzę
            audiodeskrypcje do filmów fabularnych i dokumentalnych, przestrzeni
            wystawienniczych, dzieł sztuki, spektakli operowych. Zajmuję się
            także czytaniem audiodeskrypcji na żywo oraz nagrywaniem.</span>
          </h6>
        </div>
      </Container>
    </section>
  )
}

export default Short