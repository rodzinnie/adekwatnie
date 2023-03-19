import Heading from '../Heading/index'
import styles from './index.module.scss'

const SegmentHeader = ({ bgColor, variant, title }) => {
  return (
    <header className={styles[bgColor]}>
      <Heading variant={variant} headingLevel={'2'} text={title} />
    </header>
  )
}

export default SegmentHeader
