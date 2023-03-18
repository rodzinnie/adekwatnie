import TilesContainer from '../TilesContainer/index'
import Heading from '../Heading'
import styles from './index.module.scss'

const VoiceRecordings = () => {
  return (
    <section className={styles.root}>
      <TilesContainer
        className={styles.tilesContainer}
        listName='recordings'
        heading={
          <Heading variant='bgLightBlue' headingLevel={'3'} text={'tak brzmi mój głos'}/>
        }
      />
    </section>
  )
}

export default VoiceRecordings
