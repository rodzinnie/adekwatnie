function SVGPlay(props) {
  return (
    <svg
      width={props.width || '344'}
      height={props.height || '48'}
      viewBox={`0 0 ${props.width} ${props.height}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d="M63.7942 26.7201L16.0933 48.5566V4.8835L63.7942 26.7201Z" fill={props.fill}/>
      <line x1="28.3841" y1="43.9174" x2="51.2606" y2="33.152" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="42.4456" y1="40.8195" x2="66.227" y2="29.6283" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="19.8559" y1="50.6009" x2="36.1166" y2="42.8093" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="19.963" y1="1.02325" x2="41.4844" y2="11.0897" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="34.1722" y1="9.05156" x2="55.9103" y2="19.0845" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="19.2127" y1="4.04046" x2="31.7061" y2="9.95839" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="11.7305" y1="5.13989" x2="11.7305" y2="20.4515" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="15.4939" y1="32.2363" x2="15.4939" y2="42.6555" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="13.7358" y1="21.4463" x2="13.7358" y2="38.3922" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="15.2412" y1="6.01636" x2="15.2412" y2="23.3386" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
    </svg>
  )
}
export default SVGPlay