import styles from './index.module.scss'
import SVGStop from '../../icons/SVGStop'
import SVGPlay from '../../icons/SVGPlay'
import clsx from 'clsx'

function Button({
  name,
  fill = '#e63946',
  scale = 1,
  handleClick,
  parentId = -1,
  children,
}) {
  const Icon = name === 'play' ? SVGPlay : SVGStop
  return (
    <button className={clsx(styles.root, name)} onClick={handleClick} data-tileno={parentId}>
      <Icon width={68 * scale} height={52 * scale} fill={fill} />
      <div id={styles.text}>{children}</div>
    </button>
  )
}

export default Button
