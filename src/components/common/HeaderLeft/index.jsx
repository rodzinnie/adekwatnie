import styles from './index.module.scss'

function HeaderLeft({variant, children}) {
  return (
    <div className={styles[`${variant}`]}>
      <p  className={styles.p}>{children}</p>
    </div>
  )
}

export default HeaderLeft