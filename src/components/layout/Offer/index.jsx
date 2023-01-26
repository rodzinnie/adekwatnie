import styles from './index.module.scss'
import { Heading, TilesContainer } from '../../common'

const offerList = [
  {
    title: 'Audiodeskrypcje Filmowe',
    text: 'Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
  {
    title: 'Audiodeskrypcje Teatralne',
    text: '1Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
  {
    title: 'Audiodeskrypcje Eventów',
    text: '2Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
  {
    title: 'Nagrywanie Ścieżek',
    text: '3Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
  {
    title: 'Voiceover - lektorka na żywo',
    text: '4Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
  {
    title: 'Szkolenia',
    text: '5Masz gotowy tekst AD, ale potrzebujesz go nagrać? Współpracuję z profesjonalnymi studiami w Krakowie i Warszawie. Nagrywam głównie audiodeskrypcje do filmów, ale nie tylko.',
    variant: 'darkBlue' , fill: '#1d3557', buttons: ['play']
  },
]

function Offer() {
  return (
    <section id='offer' className={styles.root}>
      <Heading variant={'bckgLightBlue'}>
        <h2>oferta</h2>
      </Heading>
      <TilesContainer list={offerList} />
    </section>
  )
}

export default Offer
