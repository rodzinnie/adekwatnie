import { useState } from 'react'

import styles from './App.module.scss'
import { Navbar } from './components/common'
import { About, Contact, Footer, Hero, Offer } from './components/layout'

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Offer />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
