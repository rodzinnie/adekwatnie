import { useState, useEffect } from 'react'

import styles from './index.module.scss'
import {
  Button,
  ContrastSection,
  Divider,
  Heading,
  ReadMore,
  SegmentHeader,
  TilesContainer,
} from '../../common'
import useData from '../../../context/useData'

function Offer() {
  const {
    data: { offerList },
  } = useData()
  
  const [currentSlide, setCurrentSlide] = useState()
  // TODO - this function to set dimensions has to be in utils 
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
  useEffect(() => {
    if (currentSlide) {
      const offerElem = document.getElementById('readMore')
      offerElem.scrollIntoView({behavior:'smooth'})
    }
  }, [currentSlide])

  const handleClick = (e) => {
    const idElem = e.currentTarget.querySelector(`[data-tileno]`).dataset.tileno
    const isButton = e.target.tagName === 'path' ? true : false
    if (isButton && idElem >= 0) {
      setCurrentSlide(offerList[idElem])
      console.log(currentSlide)
    }
  }


  return (
    <section id='offer' className={styles.root}>
      <SegmentHeader bgColor='bgRed' variant='bgLightBlue' title='oferta' />
      <div className={styles.content}>
        <TilesContainer listName='offerList' handleClick={handleClick} />
      </div>
      {currentSlide && <ReadMore currentSlide={currentSlide} />}
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
