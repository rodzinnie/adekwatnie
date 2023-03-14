import styles from './index.module.scss'
import SVGLogo from '../../icons/SVGLogo'
import React, {useEffect, useState} from 'react'

const Logo = ({ height, windowSize }) => {
  const [calculatedSize, setCalculatedSize] = useState(340)
  useEffect(() => {
    if(windowSize.innerWidth <= 575){
      setCalculatedSize(180)
    } else {
      setCalculatedSize(340)
    }
  }, [windowSize.innerWidth])
  return (
    <div className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
      <SVGLogo width={calculatedSize} height={height} />
    </div>
  )
}
export default Logo
