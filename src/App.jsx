import { useState } from 'react'

import styles from './App.module.scss'
import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Offer,
} from './components/layout'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Hero />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
