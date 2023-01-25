import { useState } from 'react'
import styles from './index.module.scss'

const Spinner = () => {
  const [words, setWords] = useState([
    'film',
    'spektakl',
    'event',
    'film',
    'spektakl',
    'event',
    'film',
  ])

  return (
    <div className={styles.spinner}>
      {words.map((word, wordId) => {
        return (
          <p className={styles.word} key={wordId}>
            {word}
          </p>
        )
      })}
    </div>
  )
}

export default Spinner
