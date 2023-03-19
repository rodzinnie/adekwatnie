import TilesContainer from '../TilesContainer/index'
import Heading from '../Heading'
import styles from './index.module.scss'
import { useEffect } from 'react'
import ad from '../../../assets/probki/ad.wav'
import book from '../../../assets/probki/book.wav'
import film from '../../../assets/probki/film.wav'
const VoiceRecordings = () => {
  useEffect(() => {
    const tiles = document.getElementById('recordings-section')
    const buttons = tiles.querySelectorAll(`[data-tileno]`)
    for( let button of buttons){
      button.addEventListener('click', (e) => {
        const tileNo = e.currentTarget.dataset.tileno
        const isPlayer = e.currentTarget.classList
        const player = document.getElementById('audio' + tileNo)
        if (isPlayer.contains("play")){
          player.play()
        } else if(isPlayer.contains("stop")) {
          player.pause()
        }
      })
    }
  }, [])
  return (
    <section className={styles.root} id='recordings-section'>
      <TilesContainer
        className={styles.tilesContainer}
        listName='recordings'
        heading={
          <Heading variant='bgLightBlue' headingLevel={'4'} text={'tak brzmi mój głos'}/>
        }
      />
      <audio controls className={styles.audio} id='audio0'>
        <source src={ad} type="audio/wav" />
      </audio>
      <audio controls className={styles.audio} id='audio1'>
        <source src={book} type="audio/wav" />
      </audio>
      <audio controls className={styles.audio} id='audio2'>
        <source src={film} type="audio/wav" />
      </audio>
    </section>
  )
}

export default VoiceRecordings
