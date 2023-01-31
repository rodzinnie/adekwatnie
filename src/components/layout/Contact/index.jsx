import {Heading, Tile, TilesContainer} from '../../common'
import styles from './index.module.scss'

function Contact() {
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
        ></Tile>
        <Tile 
          title='Zadzwon do mnie!'
          buttons={[{children:'', name: 'play'}]}
          description='691 880 188'
          variant='lightBlue'
        ></Tile>
      </div>
    </section>
  )
}

export default Contact
