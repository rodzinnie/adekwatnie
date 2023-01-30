import { useState } from 'react'

import styles from './index.module.scss'
import { Button, ContrastSection, Heading, SegmentHeader, TilesContainer } from '../../common'
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
        <div className={styles.spread}>
          <Heading variant={'bgRed'}><h3 style={{textTransform: 'lowercase'}}>{slideHeading.title}</h3></Heading>
          <div className={styles.aboutMe}><h6>{slideHeading.text}</h6></div>
          <div className={styles.buttons}>
            <Button name='play'></Button>
            <Button></Button>
          </div>
        </div>
      </ContrastSection>
      </div>
    </section>
  )
}

export default Offer
