import { useEffect, useState } from 'react'

import {Button, ContrastSection, Heading} from '../'
import styles from './index.module.scss'

const ReadMore = ({currentSlide}) => {

  const goUp = (e) => {
    document.getElementById('offer').scrollIntoView({behavior:'smooth'})
  }
  
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const handleResize = () => {
    setDimensions({
    width: window.innerWidth,
    height: window.innerHeight,
    })
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize, false)
  }, [])

  return (
    <div className={styles.bgRed} id='readMore'>
        <ContrastSection className={styles.container}>
          <div className={styles.spread}>
            <Heading variant={'bgBlue'} headingLevel='6' text={currentSlide.title} />
            <div className={styles.aboutMe}>
              <h6>{currentSlide.text}</h6>
            </div>
            <div className={styles.buttons}>
              <Button name='play' scale={dimensions.width<767 ? 1 : 2.2} handleClick={()=> (window.location.assign('/#contact'))}>
                <h6 className={styles.btnTxt}>o mnie</h6>
              </Button>
              <Button name='' scale={dimensions.width<767 ? 1 : 2.2} handleClick={goUp}>
                <h6 className={styles.btnTxt}>powrot</h6>
              </Button>
            </div>
          </div>
        </ContrastSection>
      </div>
  )
}

export default ReadMore