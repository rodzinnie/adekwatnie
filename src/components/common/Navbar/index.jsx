import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Sling as Hamburger } from 'hamburger-react'
import Logo from '../Logo/index'
import styles from './index.module.scss'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const inputRef = useRef()
  const rootRef = useRef()
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState(null)

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

  function handleScroll() {
    if (window.scrollY > 150) setIsScrolled(true)
    if (window.scrollY < 100) {
      setIsScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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

  const handleClick = (e) => {
    setActive(e.target)
  }

  return (
    <header
      id='header'
      className={clsx(styles.root, isScrolled ? styles.scrolled : null)}
      ref={rootRef}
    >
      <Logo height={isScrolled ? '32' : null} />
      <nav ref={inputRef} className={styles.nav} onClick={handleClick}>
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
    </header>
  )
}

export default Navbar
