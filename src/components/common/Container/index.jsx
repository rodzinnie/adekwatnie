import clsx from 'clsx'
import styles from './index.module.scss'

function Container({ className, children }) {
  return <div className={clsx(styles.root, className)}>{children}</div>
}

export default Container
