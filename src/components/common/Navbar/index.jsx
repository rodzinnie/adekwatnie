import { useState, useRef, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'

import styles from './index.module.css'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const inputRef = useRef()
  const rootRef = useRef()

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
      if (innerWidth >= 1200) {
        setOpen(true)
      } else {
        setOpen(false)
      }
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function getWindowSize() {
    const { innerWidth, innerHeight } = window

    return { innerWidth, innerHeight }
  }

  const handleHamburger = (toggled) => {
    if (toggled) {
      inputRef.current.style.right = 0
      rootRef.current.style.overflow = 'visible'
    } else {
      inputRef.current.style.right = '-120%'
      setTimeout(() => (rootRef.current.style.overflow = 'hidden'), 400)
    }
  }

  const handleIsActive = ({ isActive }) => {
    return {
      borderBottom: isActive ? '1px black solid' : 'none',
      textShadow: isActive ? '2px 3px #33323280' : 'none',
    }
  }

  const handleOnClick = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={styles.logos}>
        <p>adekwatne.pl</p>
      </div>
      <nav ref={inputRef} className={styles.nav}>
        <a className={styles.navlink} href='#offer'>
          oferta
        </a>
        <a className={styles.navlink} href='#about'>
          o mnie
        </a>
        <a className={styles.navlink} href='#contact'>
          kontakt
        </a>
      </nav>
      <div className={styles.hamburger}>
        <Hamburger
          onToggle={handleHamburger}
          toggled={isOpen}
          toggle={setOpen}
          color='#000000'
        />
      </div>
    </div>
  )
}

export default Navbar
