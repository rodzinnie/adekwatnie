import styles from './index.module.scss'

function Heading({ variant, children }) {
  return (
    <div className={styles[`${variant}`]}>
      <p className={styles.p}>{children}</p>
    </div>
  )
}

export default Heading
