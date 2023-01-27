import Spinner from './Spinner'
import styles from './index.module.scss'

function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.phrase}>
        {/* <h4 className={styles.title}>audiodeskrypcje</h4> */}
        <div className={styles.sentence}>
          <p className={styles.words}>aby</p>
          <Spinner />
          <p className={styles.words}>przemówił ludzkim głosem</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
