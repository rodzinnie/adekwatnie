import Heading from '../../common/Heading'
import styles from './index.module.scss'

function Contact() {
  return (
    <section id='contact' className={styles.root}>
      <Heading variant={'bgRed'}>
        <h2>Kontakt</h2>
      </Heading>
    </section>
  )
}

export default Contact
