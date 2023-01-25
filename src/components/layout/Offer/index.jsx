import styles from './index.module.scss'
import {Heading, TilesContainer} from '../../common'
function Offer() {
  return (
    <div className={styles.root}>
      <Heading variant={'bckgRed'}>oferta</Heading>
      <TilesContainer />
    </div>
  )
}

export default Offer