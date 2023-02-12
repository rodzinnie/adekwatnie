import clsx from 'clsx'
import styles from './index.module.scss'
import { Tile } from '../'
import { useContext } from 'react';
import useData from '../../../context/useData'

function TilesContainer({ listName, heading, className }) {
  console.log('dupa', listName)
  const { data } = useData()
  const list = data[listName]
  console.log(data, listName)
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
