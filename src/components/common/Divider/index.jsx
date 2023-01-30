import SVGDivider from '../../icons/SVGdivider';
import styles from './index.module.scss'

function Divider({children}) {
  return (
    <div className={styles.sectionSummary}>
      {children}
      <SVGDivider />
  </div>
  )
}

export default Divider