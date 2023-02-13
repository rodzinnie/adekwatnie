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
          <Heading variant='bgLightBlue'>
            <h3>tak brzmi mój głos</h3>
          </Heading>
        }
      />
    </section>
  )
}

export default VoiceRecordings
