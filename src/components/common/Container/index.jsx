import styles from './index.module.scss'

function Container({children}) {
  return (
    <div className={styles.root}>{children}</div>
  )
}

export default Container