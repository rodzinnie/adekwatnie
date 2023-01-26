import styles from './index.module.scss'
import clsx from 'clsx'
import Button from '../Button';
function Tile({variant, buttons=[], children}) {
  return (
    <div className={clsx(styles[variant], styles.root )}>
      {children}
      <div className={styles.buttons}>
        {buttons.includes('play') && 
          <Button play={true}/>
        }
        {buttons.includes('stop') && 
          <Button stop={true}/>
        }
      </div>
    </div>
  )
}

export default Tile