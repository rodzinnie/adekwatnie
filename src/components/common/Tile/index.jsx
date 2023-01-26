import styles from './index.module.scss'
import clsx from 'clsx'
import Button from '../Button';
function Tile({variant, buttons=[], children, fill}) {
  return (
    <div className={clsx(styles[variant], styles.root )}>
      {children}
      <div className={styles.buttons}>
        {buttons.includes('play') && 
          <Button play={true} fill={fill}/>
        }
        {buttons.includes('stop') && 
          <Button stop={true} fill={fill}/>
        }
      </div>
    </div>
  )
}

export default Tile