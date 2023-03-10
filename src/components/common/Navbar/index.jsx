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
  const inputRef = useRef()
  const rootRef = useRef()
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

  const handleHamburger = (toggled) => {
    if (toggled) {
      inputRef.current.style.right = 0
      rootRef.current.style.overflow = 'visible'
    } else {
      inputRef.current.style.right = '-120%'
      setTimeout(() => (rootRef.current.style.overflow = 'hidden'), 400)
    }
  }

  const handleClick = (name) => {
    setActive(name)
  }

  return (
    <header
      id='header'
      className={clsx(styles.root, isScrolled ? styles.scrolled : null)}
      ref={rootRef}
    >
      <Logo height={isScrolled ? '32' : null} />
      <nav ref={inputRef} className={styles.nav}>
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
          onToggle={handleHamburger}
          toggled={isOpen}
          toggle={setOpen}
          color='#000000'
        />
      </div>
    </header>
  )
}

export default Navbar
