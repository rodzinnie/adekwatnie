import styles from './index.module.scss'
import SVGStop from '../../icons/SVGStop'
import SVGPlay from '../../icons/SVGPlay'

function Button({ name, fill = 'black', text }) {
  const Icon = name === 'play' ? SVGPlay : SVGStop

  return (
    <button className={styles.root}>
      <Icon width='68' height='52' fill={fill} />
      <div>{text}</div>
    </button>
  )
}

export default Button
