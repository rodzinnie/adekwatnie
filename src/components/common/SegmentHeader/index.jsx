import Heading from '../Heading/index'
import styles from './index.module.scss'

const SegmentHeader = ({ bgColor, variant, title }) => {
  return (
    <header className={styles[bgColor]}>
      <Heading variant={variant}>
        <h2>{title}</h2>
      </Heading>
    </header>
  )
}

export default SegmentHeader
