import clsx from 'clsx'
import styles from './index.module.scss'

function Heading({ variant, headingLevel, text }) {
  return <div className={clsx(styles.root, styles[variant], styles[`h${headingLevel}`])}>
    {text}
    </div>
}

export default Heading
