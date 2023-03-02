import styles from './index.module.scss'
import SVGLogo from '../../icons/SVGLogo'

const Logo = ({ width, height }) => {
  return (
    <div className={styles.logo} onClick={() => window.scrollTo(0, 0)}>
      <SVGLogo width={width} height={height} />
    </div>
  )
}
export default Logo
