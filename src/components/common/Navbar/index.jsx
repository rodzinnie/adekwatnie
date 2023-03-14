import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'
import { Sling as Hamburger } from 'hamburger-react'
import Logo from '../Logo/index'
import Heading from '../Heading/index'
import styles from './index.module.scss'
import { useScrollPosition } from '../../../hooks/useScrollPosition'
import useData from '../../../context/useData'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const inputRef = useRef()
  const rootRef = useRef()
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState(null)
  const scrollPosition = useScrollPosition()
  const {data: {navbar}} = useData()
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
    const nav = document.getElementById('navbar')
    if (toggled) {
      nav.classList.add('visible')
      nav.classList.remove('hide')
    } else {
      nav.classList.remove('visible')
      nav.classList.add('hide')
      // setTimeout(() => (), 400)
    }
    console.log(nav.classList)
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
      <Logo height={isScrolled ? '32' : null} windowSize={windowSize} />
      <nav ref={inputRef} className={styles.nav} id={'navbar'}>
        {navbar.map((e, i) => {
          return <a
            className={styles.navlink}
            href={e.href}
            onClick={() => handleClick(e.name)}
            key={i}
          >
            <Heading variant={active === e.name ? 'bgRed' : null}>
              <h5>{e.namePl}</h5>
            </Heading>
          </a>
        })}
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
