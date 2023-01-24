import styles from './index.module.scss'
import {Navbar} from '../../common'
function Header() {
  return (
    <div className={styles.root}>
      <Navbar />
    </div>
  )
}

export default Header