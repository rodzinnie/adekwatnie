import {Heading, ContrastSection} from '../'
import styles from './index.module.scss'

const Short = () => {
  return (
    <ContrastSection style={{position: 'relative'}}>
      <div className={styles.myPic}>
        <p>img</p>
      </div>
      <div className={styles.aboutMe}>
        <h6 className={styles.blurb}>
        <Heading variant='bgRedRmMargin' headingLevel={'2'} text={'N'} />
        <span className={styles.blurbSpan}>azywam się Jagoda Grudzień i <span className='ad'>ad</span>ekwatne teksty to moja pasja: tworzę
          audiodeskrypcje do filmów fabularnych i dokumentalnych, przestrzeni
          wystawienniczych, dzieł sztuki, spektakli operowych. Zajmuję się
          także czytaniem audiodeskrypcji na żywo oraz nagrywaniem.</span>
        </h6>
      </div>
    </ContrastSection>
  )
}

export default Short
