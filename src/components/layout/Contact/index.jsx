import {Heading, Tile} from '../../common'
import styles from './index.module.scss'

function Contact() {
  const mailto = (action) => {
    //TODO this will have to come from context (data.js)
    const actionToTake = action=='mail' ? 'mailto:kontakt@adekwatne.pl' : 'tel:696019013'
    const a = document.createElement('a')
    a.href = actionToTake;
    a.click();
  }
  return (
    <section id='contact' className={styles.root}>
      <Heading variant={'lightBlue'} headingLevel='2' text='kontakt' />
      <div className={styles.background}>
        {/* to do zmiany - musi byc TilesContainer */}
        <Tile 
          title='Napisz do mnie!'
          buttons={[{children:'', name: 'play'}]}
          description='kontakt@adekwatne.pl'
          variant='darkBlue'
          buttonClick={() => mailto('mail')}
        ></Tile>
        <Tile 
          title='Zadzwoń do mnie!'
          buttons={[{children:'', name: 'play'}]}
          description='696 019 013'
          variant='lightBlue'
          buttonClick={() => mailto('tel')}
        ></Tile>
      </div>
    </section>
  )
}

export default Contact
