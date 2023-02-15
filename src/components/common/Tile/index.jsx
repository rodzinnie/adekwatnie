import styles from './index.module.scss'
import clsx from 'clsx'
import Button from '../Button/index'

function Tile({ variant, title, description, buttons, parentId, buttonClick= (e) => (e) }) {
  return (
    <div className={clsx(styles[variant], styles.root)}>
      {title !== undefined && <h6>{title}</h6>}
      {description !== undefined && (
        <p className={styles.description}>{description}</p>
      )}
      <div className={styles.buttons} onClick={buttonClick}>
        {buttons?.length &&
          buttons.map((button, id) => (
            <Button parentId={parentId} key={id} {...button} />
          ))}
      </div>
    </div>
  )
}

export default Tile
