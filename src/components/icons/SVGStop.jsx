function SVGStop(props) {
  return (
    <svg
      width={props.width || '344'}
      height={props.height || '48'}
      viewBox={`0 0 ${props.width} ${props.height}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1="1" y1="8.64526" x2="1" y2="23.9568" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="4.76343" y1="35.7417" x2="4.76343" y2="46.1609" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="3.00537" y1="24.9517" x2="3.00537" y2="41.8976" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="4.51074" y1="9.52173" x2="4.51074" y2="26.844" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="51.4294" y1="9.39771" x2="51.4294" y2="24.7093" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="55.1929" y1="36.4941" x2="55.1929" y2="46.9133" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="53.4348" y1="25.7039" x2="53.4348" y2="42.6498" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="54.9402" y1="10.2739" x2="54.9402" y2="27.5962" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="8.90308" y1="49.5476" x2="34.9782" y2="49.5476" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <path d="M29.5833 55.0637H48.9239" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="9.40308" y1="52.0583" x2="38.5335" y2="52.0583" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="32.2991" y1="51.053" x2="42.153" y2="51.053" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="1" y1="-1" x2="25.0146" y2="-1" transform="matrix(-1 0 0 1 46.666 2)" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <path d="M26.5771 6.51611H8.65598" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <line x1="1.5" y1="-1.5" x2="28.2723" y2="-1.5" transform="matrix(-1 0 0 1 46.666 5.01074)" stroke={props.fill} stroke-width="3" stroke-linecap="round"/>
      <line x1="1" y1="-1" x2="9.98394" y2="-1" transform="matrix(-1 0 0 1 24.9873 3.50537)" stroke={props.fill} stroke-width="2" stroke-linecap="round"/>
      <rect x="7.90308" y="7.64526" width="41.0209" height="41.0209" fill={props.fill}/>
    </svg>
  )
}

export default SVGStop