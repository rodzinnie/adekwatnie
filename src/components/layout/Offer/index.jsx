import { useState } from 'react'

import styles from './index.module.scss'
import {
  Button,
  ContrastSection,
  Divider,
  Heading,
  SegmentHeader,
  TilesContainer,
} from '../../common'
import useData from '../../../context/useData'

function Offer() {
  const {
    data: { offerList },
  } = useData()
  const [currentSlide, setCurrentSlide] = useState(offerList[0])

  const handleClick = (e) => {
    // const currentId = offerList.indexOf(currentSlide)
    const idElem = e.currentTarget.querySelector(`[data-tileno]`).dataset.tileno
    const button = e.target.tagName == 'path' ? true : false
    if (button) {

      setCurrentSlide(offerList[idElem])
    }
  }

  return (
    <section id='offer' className={styles.root}>
      <SegmentHeader bgColor='bgRed' variant='bgLightBlue' title='oferta' />
      <div className={styles.content} >
        <TilesContainer listName='offerList' handleClick={handleClick}/>
      </div>
      <div className={styles.bgRed}>
        <ContrastSection className={styles.container}>
          <div className={styles.spread}>
            <Heading variant={'bgRed'}>
              <h3 style={{ textTransform: 'lowercase' }}>
                {currentSlide.title}
              </h3>
            </Heading>
            <div className={styles.aboutMe}>
              <h6>{currentSlide.text}</h6>
            </div>
            <div className={styles.buttons}>
              <Button name='play' scale={2.2}>
                <h6>o mnie</h6>
              </Button>
              <Button name='pause' scale={2.2}>
                <h6>kontakt</h6>
              </Button>
            </div>
          </div>
        </ContrastSection>
      </div>
      <Divider>
        <p>
          Ceny poszczególnych usług uzależnione są od ich specyfiki i ustalane
          indywidualnie.
        </p>
      </Divider>
    </section>
  )
}

export default Offer
