import Spinner from './Spinner'
import styles from './index.module.scss'

function Hero() {
  return (
    <div className={styles.root}>
      <div className={styles.phrase}>
        <p>aby </p>
        {/*<Spinner />*/}{' '}
        <p className={styles.sentence}> przemowil ludzkim glosem</p>
      </div>
    </div>
  )
}

export default Hero
