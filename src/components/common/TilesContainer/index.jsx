import clsx from 'clsx'
import styles from './index.module.scss'
import { Tile } from '../'

function TilesContainer({ list, heading, className }) {
  return (
    <div className={clsx(styles.root, className)}>
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
