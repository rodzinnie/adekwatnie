import styles from './index.module.scss'
import SVGStop from '../../icons/SVGStop'
import SVGPlay from '../../icons/SVGPlay'
function Button({play=false, stop=false, fill='black', children}) {
  return (
    <button className={styles.root}>
      {play && <SVGPlay width='100' height='100' fill={fill} />}
      {stop && <SVGStop width='100' height='100' fill={fill}/>}
      <div>{children}</div>
    </button>
  )
}

export default Button