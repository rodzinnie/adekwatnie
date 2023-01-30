import styles from './index.module.scss'
import {Container} from '../'

function ContrastSection({children}) {
  return (
    <section className={styles.root}>
      <Container className={styles.container}>
        {children}
      </Container>
    </section>
  )
}

export default ContrastSection