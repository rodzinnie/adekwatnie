import styles from './index.module.scss'

function Heading({ variant, children }) {
  return (
    <div className={styles.root}>
      <p className={styles[`${variant}`]}>{children}</p>
    </div>
  )
}

export default Heading
