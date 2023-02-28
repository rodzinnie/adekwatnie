import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Sling as Hamburger } from 'hamburger-react'
import Logo from '../Logo/index'
import Heading from '../Heading/index'
import styles from './index.module.scss'
import { useScrollPosition } from '../../../hooks/useScrollPosition'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState(null)
  const scrollPosition = useScrollPosition()

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

  useEffect(() => {
    if (scrollPosition > 150) {
      setIsScrolled(true)
    }
    if (scrollPosition < 100) {
      setIsScrolled(false)
    }
  }, [scrollPosition])

  function getWindowSize() {
    const { innerWidth, innerHeight } = window

    return { innerWidth, innerHeight }
  }

  const handleClick = (name) => {
    setActive(name)
  }

  return (
    <header
      id='header'
      className={clsx(
        styles.root,
        isScrolled && styles.scrolled,
        isOpen && styles.open
      )}
    >
      <Logo height={isScrolled ? '32' : null} />
      <nav className={styles.nav}>
        <a
          className={styles.navlink}
          href='#offer'
          onClick={() => handleClick('offer')}
        >
          <Heading variant={active === 'offer' ? 'bgRed' : null}>
            <h5>oferta</h5>
          </Heading>
        </a>
        <a
          className={styles.navlink}
          href='#about'
          onClick={() => handleClick('about')}
        >
          <Heading variant={active === 'about' ? 'bgRed' : null}>
            <h5>o mnie</h5>
          </Heading>
        </a>
        <a
          className={styles.navlink}
          href='#contact'
          onClick={() => handleClick('contact')}
        >
          <Heading variant={active === 'contact' ? 'bgRed' : null}>
            <h5>kontakt</h5>
          </Heading>
        </a>
      </nav>
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color='#000000'
          size={40}
          rounded
          label='show menu'
        />
      </div>
    </header>
  )
}

export default Navbar
