import styles from './App.module.scss'
import { Navbar } from './components/common'
import { About, Contact, Footer, Hero, Offer } from './components/layout'
import {DataProvider} from './context/useData'

function App() {
  return (
    <DataProvider>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Offer />
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </DataProvider>
  )
}

export default App
