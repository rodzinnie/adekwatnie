import clsx from 'clsx'
import styles from './index.module.scss'
import { Container } from '../'

function ContrastSection({ children, className }) {
  return (
    <section className={styles.root}>
      <Container className={clsx(styles.container, className)}>
        {children}
      </Container>
    </section>
  )
}

export default ContrastSection
