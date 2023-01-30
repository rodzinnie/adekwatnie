import styles from './index.module.scss'
import {Heading} from '../'
function Awards() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Heading variant='bgRed'>
          <h3>nagrody</h3>
        </Heading>
        <p className={styles.paraLeft}>
          2022: I miejsce w konkursie na najlepszą audiodeskrypcję filmową na
          XII Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku
          (Poufne lekcje perskiego, reż. V. Perelman)

        </p>
        <p className={styles.paraRight}>
          2022: wyróżnienie w konkursie dla krytyczek i krytyków filmowych im.
          Krzysztofa Mętraka (tekst pt. Dziennik przekł.AD.owy)
        </p>
        <p className={styles.paraLeft}>
          2021: I miejsce w konkursie na najlepszą audiodeskrypcję filmową na
          XI Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku
          (SWEAT, reż. Magnus von Horn)

        </p>
        <p className={styles.paraRight}>
          2020: II miejsce w konkursie na najlepszą audiodeskrypcję filmową na
          X Festiwalu Kultury i Sztuki (dla Osób Niewidomych) w Płocku (Wysoka
          dziewczyna, reż. K. Bałagow)
        </p>
      </div>
    </section>
  )
}

export default Awards