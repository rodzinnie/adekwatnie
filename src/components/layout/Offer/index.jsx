import styles from './index.module.scss'
import { TilesContainer } from '../../common'
import SegmentHeader from '../../common/SegmentHeader'

const offerList = [
  {
    title: 'Audiodeskrypcje Filmowe',
    text: 'Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
  {
    title: 'Audiodeskrypcje Teatralne',
    text: '1Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Audiodeskrypcje Eventów',
    text: '2Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Nagrywanie Ścieżek',
    text: '3Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'lightBlue',
    buttons: [{ name: 'play', fill: '#457B9D' }],
  },
  {
    title: 'Voiceover - lektorka na żywo',
    text: '4Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'red',
    buttons: [{ name: 'play', fill: '#E63946' }],
  },
  {
    title: 'Szkolenia',
    text: '5Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue',
    buttons: [{ name: 'play', fill: '#1d3557' }],
  },
]

function Offer() {
  return (
    <section id='offer' className={styles.root}>
      <SegmentHeader bgColor='bgRed' variant='bgLightBlue' title='oferta' />
      <div className={styles.content}>
        <TilesContainer list={offerList} />
      </div>
    </section>
  )
}

export default Offer
