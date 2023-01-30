import { useState } from 'react'

import styles from './index.module.scss'
import { ContrastSection, Heading, SegmentHeader, TilesContainer } from '../../common'
import {offerList} from './data'
function Offer() {
  const [slideHeading, setSlideHeading] = useState(offerList[0])
  return (
    <section id='offer' className={styles.root}>
      <SegmentHeader bgColor='bgRed' variant='bgLightBlue' title='oferta' />
      <div className={styles.content}>
        <TilesContainer list={offerList} />
      </div>
      <div className={styles.bgRed}>
      <ContrastSection>
        <Heading variant={'bgRed'}><h3 style={{textTransform: 'lowercase'}}>{slideHeading.title}</h3></Heading>
        <div className={styles.aboutMe}><h6>{slideHeading.text}</h6></div>
      </ContrastSection>
      </div>
    </section>
  )
}

export default Offer
