import styles from './index.module.scss'
import {Tile} from '../'

function Container({children}) {
  return (
    <div className={styles.root}>
      <Tile variant='container' >{children}</Tile>
    </div>
  )
}

export default Container