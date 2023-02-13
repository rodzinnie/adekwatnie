import clsx from 'clsx'
import styles from './index.module.scss'
import { Tile } from '../'
import useData from '../../../context/useData'

function TilesContainer({ listName, heading, className, handleClick = (e) => console.log('gimme some fun') }) {
  const { data } = useData()
  const list = data[listName]
  return (
    <div className={clsx(styles.root, className)}>
      {heading}
      <div className={styles.tilesSection}>
        {list.map((listItem, i) => {
          return (
            <div key={i} onClick={e => handleClick(e)}>
              <Tile
                parentId={i}
                variant={listItem.variant || ''}
                title={listItem.title}
                buttons={listItem.buttons}
                />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TilesContainer
