import styles from './index.module.scss'
import { Tile } from '../'

function TilesContainer({ list, heading }) {
  return (
    <div className={styles.root}>
      {heading}
      <div className={styles.tilesSection}>
        {list.map((listItem, i) => {
          return (
            <Tile
              key={i}
              variant={listItem.variant || ''}
              title={listItem.title}
              buttons={listItem.buttons}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TilesContainer
