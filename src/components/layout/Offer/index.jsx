import styles from './index.module.scss'
import {HeaderLeft, OfferTiles} from '../../common'
function Offer() {
  return (
    <div className={styles.root}>
      <HeaderLeft variant={'bckgRed'}>oferta</HeaderLeft>
      <OfferTiles />
    </div>
  )
}

export default Offer