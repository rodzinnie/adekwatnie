import styles from './index.module.scss'
import {Heading, Tile} from '../'


function TilesContainer({list, heading, headingColor}) {
  return (
    <div className={styles.root}>
      <Heading variant={headingColor}>{heading}</Heading>
      <div className={styles.tilesSection}>
        {list.map((e, i) => {
          return <Tile key={i} variant={e.variant || ''} buttons={e.buttons}>
            <p>{e.title}</p>
          </Tile>
        })}
      </div>
    </div>
  )
}

export default TilesContainer