import {Heading, Tile} from '../../common'
import styles from './index.module.scss'

function Contact() {
  const mailto = (action) => {
    const actionToTake = action=='mail' ? 'mailto:contact@test.com' : 'tel:782655969'
    const a = document.createElement('a')
    a.href = actionToTake;
    a.click();
  }
  return (
    <section id='contact' className={styles.root}>
      <Heading variant={'bgDarkBlue'}>
        <h2>kontakt</h2>
      </Heading>
      <div className={styles.background}>
        <Tile 
          title='Napisz do mnie!'
          buttons={[{children:'', name: 'play'}]}
          description='kontakt@adekwatnie.pl'
          variant='darkBlue'
          buttonClick={() => mailto('mail')}
        ></Tile>
        <Tile 
          title='Zadzwon do mnie!'
          buttons={[{children:'', name: 'play'}]}
          description='691 880 188'
          variant='lightBlue'
          buttonClick={() => mailto('tel')}
        ></Tile>
      </div>
    </section>
  )
}

export default Contact
