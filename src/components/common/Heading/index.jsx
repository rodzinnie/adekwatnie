import clsx from 'clsx'
import styles from './index.module.scss'

function Heading({ variant, children }) {
  return <div className={clsx(styles.root, styles[variant])}>{children}</div>
}

export default Heading
