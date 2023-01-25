import styles from './index.module.scss'

function Heading({ variant, children }) {
  return (
    <div className={styles.root}>
      <h1 className={styles[`${variant}`]}>{children}</h1>
    </div>
  )
}

export default Heading
