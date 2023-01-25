import styles from './index.module.scss'
import clsx from 'clsx'
function Tile({variant, buttons=[], children}) {
  return (
    <div className={clsx(styles[variant], styles.root )}>
      {children}
      <div className={styles.buttons}>
        {buttons.includes('play') && 
          <p>play</p>
        }
        {buttons.includes('stop') && 
          <p>stop</p>
        }
      </div>
    </div>
  )
}

export default Tile