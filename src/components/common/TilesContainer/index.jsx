import styles from './index.module.scss'
import { Tile } from '../'

function TilesContainer({ list, heading }) {
  return (
    <div className={styles.root}>
      {heading}
      <div className={styles.tilesSection}>
        {list.map((e, i) => {
          return (
            <Tile key={i} variant={e.variant || ''} buttons={e.buttons}>
              <p>{e.title}</p>
            </Tile>
          )
        })}
      </div>
    </div>
  )
}

export default TilesContainer
