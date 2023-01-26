function SVGLogo(props) {
  return (
    <svg
      width={props.width || '344'}
      height={props.height || '48'}
      viewBox='0 0 265 37'
      fill={props.color || 'none'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.28 29.48C4.49333 29.48 3.05333 29.0533 1.96 28.2C0.866667 27.32 0.32 26.08 0.32 24.48C0.32 22.9333 0.826667 21.7333 1.84 20.88C2.88 20.0267 4.08 19.44 5.44 19.12C6.82667 18.8 8.38667 18.56 10.12 18.4C11.48 18.32 12.5333 18.1467 13.28 17.88C14.0533 17.6133 14.44 17.1067 14.44 16.36C14.44 15.2933 14.0667 14.48 13.32 13.92C12.6 13.3333 11.72 13.04 10.68 13.04C9.45333 13.04 8.45333 13.3733 7.68 14.04C6.90667 14.7067 6.45333 15.64 6.32 16.84H1.16C1.24 15.1067 1.72 13.6267 2.6 12.4C3.48 11.1467 4.62667 10.2 6.04 9.56C7.48 8.92 9.05333 8.6 10.76 8.6C12.4667 8.6 13.9867 8.92 15.32 9.56C16.6533 10.2 17.6933 11.1333 18.44 12.36C19.1867 13.5867 19.56 15.0533 19.56 16.76V24.12H21.88V29H14.48V21.8C14.0267 24.04 13.0933 25.88 11.68 27.32C10.2933 28.76 8.49333 29.48 6.28 29.48ZM9.04 25.16C10 25.16 10.8933 24.88 11.72 24.32C12.5467 23.76 13.2 23.04 13.68 22.16C14.1867 21.2533 14.44 20.2933 14.44 19.28L14.48 18.04C14.16 18.3333 13.76 18.5467 13.28 18.68C12.8267 18.8133 12.1867 18.9467 11.36 19.08C11.3067 19.08 11.2533 19.0933 11.2 19.12C11.1467 19.12 11.1067 19.12 11.08 19.12C9.4 19.28 8.13333 19.6267 7.28 20.16C6.42667 20.6667 6 21.44 6 22.48C6 23.3867 6.28 24.0667 6.84 24.52C7.4 24.9467 8.13333 25.16 9.04 25.16ZM32.7863 29.4C31.2129 29.4 29.7863 28.9467 28.5063 28.04C27.2529 27.1333 26.2529 25.8933 25.5063 24.32C24.7863 22.72 24.4263 20.9467 24.4263 19C24.4263 17.0533 24.7863 15.2933 25.5063 13.72C26.2529 12.12 27.2529 10.8667 28.5063 9.96C29.7863 9.05333 31.2129 8.6 32.7863 8.6C34.6263 8.6 36.2129 9.28 37.5463 10.64C38.8796 11.9733 39.7863 13.7467 40.2663 15.96V0.599998H45.8263V29H40.2663V22.04C39.7863 24.2533 38.8796 26.04 37.5463 27.4C36.2129 28.7333 34.6263 29.4 32.7863 29.4ZM35.2663 24.24C36.2263 24.24 37.0929 24.0133 37.8663 23.56C38.6663 23.1067 39.2796 22.48 39.7063 21.68C40.1596 20.88 40.3863 19.9867 40.3863 19C40.3863 18.0133 40.1596 17.12 39.7063 16.32C39.2796 15.52 38.6663 14.8933 37.8663 14.44C37.0929 13.96 36.2263 13.72 35.2663 13.72C34.3063 13.72 33.4263 13.96 32.6263 14.44C31.8529 14.8933 31.2396 15.52 30.7863 16.32C30.3329 17.12 30.1063 18.0133 30.1063 19C30.1063 19.9867 30.3329 20.88 30.7863 21.68C31.2396 22.48 31.8529 23.1067 32.6263 23.56C33.4263 24.0133 34.3063 24.24 35.2663 24.24ZM61.5172 29.4C59.5439 29.4 57.7572 28.9467 56.1572 28.04C54.5572 27.1333 53.2905 25.9067 52.3572 24.36C51.4505 22.7867 50.9972 21.0267 50.9972 19.08C50.9972 17.08 51.4639 15.2933 52.3972 13.72C53.3305 12.12 54.5972 10.8667 56.1972 9.96C57.7972 9.05333 59.5839 8.6 61.5572 8.6C63.5039 8.6 65.2639 9.05333 66.8372 9.96C68.4372 10.8667 69.6905 12.12 70.5972 13.72C71.5305 15.2933 71.9972 17.0533 71.9972 19C71.9972 19.0533 71.9972 19.12 71.9972 19.2C71.9972 19.28 71.9972 19.3467 71.9972 19.4H54.1172C54.1705 20.7333 54.5305 21.9467 55.1972 23.04C55.8639 24.1067 56.7439 24.96 57.8372 25.6C58.9572 26.2133 60.1972 26.52 61.5572 26.52C63.0505 26.52 64.3705 26.1867 65.5172 25.52C66.6639 24.8267 67.4505 23.9333 67.8772 22.84H71.2772C71.0372 24.0133 70.4639 25.1067 69.5572 26.12C68.6772 27.1067 67.5439 27.9067 66.1572 28.52C64.7705 29.1067 63.2239 29.4 61.5172 29.4ZM68.9572 18.6C68.9039 17.2667 68.5439 16.0667 67.8772 15C67.2105 13.9067 66.3172 13.0533 65.1972 12.44C64.1039 11.8 62.8905 11.48 61.5572 11.48C60.2239 11.48 58.9972 11.8 57.8772 12.44C56.7839 13.0533 55.8905 13.9067 55.1972 15C54.5305 16.0667 54.1705 17.2667 54.1172 18.6H68.9572ZM77.4884 29V0.599998H80.6884V18.6H83.6884L91.4884 9H94.9684L86.8884 18.76L95.2084 29H91.4084L83.6084 19.4H80.6884V29H77.4884ZM102.721 29L96.5606 9H100.001L105.601 27.04L111.041 9H111.801L117.201 27.04L122.881 9H126.201L120.041 29H116.961L111.441 10.6L105.921 29H102.721ZM134.579 29.48C132.659 29.48 131.152 29.0267 130.059 28.12C128.966 27.2133 128.419 25.9733 128.419 24.4C128.419 22.8533 128.926 21.6533 129.939 20.8C130.979 19.9467 132.219 19.36 133.659 19.04C135.099 18.6933 136.739 18.4533 138.579 18.32C140.179 18.2133 141.406 18.0267 142.259 17.76C143.139 17.4933 143.579 17.0133 143.579 16.32C143.579 14.7733 143.059 13.5467 142.019 12.64C140.979 11.7067 139.672 11.24 138.099 11.24C136.446 11.24 135.086 11.7067 134.019 12.64C132.952 13.5467 132.299 14.8133 132.059 16.44H129.059C129.219 14.8133 129.699 13.4133 130.499 12.24C131.326 11.04 132.392 10.1333 133.699 9.52C135.032 8.90667 136.512 8.6 138.139 8.6C139.792 8.6 141.246 8.92 142.499 9.56C143.779 10.2 144.766 11.1333 145.459 12.36C146.179 13.5867 146.539 15.0133 146.539 16.64V26.16H149.299V29H143.619V22.48C143.032 24.56 141.939 26.2533 140.339 27.56C138.739 28.84 136.819 29.48 134.579 29.48ZM135.939 26.92C137.379 26.92 138.672 26.5867 139.819 25.92C140.992 25.2267 141.912 24.32 142.579 23.2C143.246 22.0533 143.579 20.8267 143.579 19.52L143.619 17.92C143.246 18.24 142.726 18.48 142.059 18.64C141.419 18.8 140.552 18.92 139.459 19C139.406 19 139.339 19.0133 139.259 19.04C139.179 19.04 139.112 19.04 139.059 19.04C136.526 19.2533 134.659 19.7067 133.459 20.4C132.259 21.0667 131.659 22.0667 131.659 23.4C131.659 24.5467 132.046 25.4267 132.819 26.04C133.592 26.6267 134.632 26.92 135.939 26.92ZM163.327 29.4C160.901 29.4 159.101 28.8533 157.927 27.76C156.754 26.64 156.167 25 156.167 22.84V11.92H151.287V9H155.007C155.487 9 155.847 8.88 156.087 8.64C156.327 8.37333 156.447 8 156.447 7.52V4.2H159.367L159.327 9H167.927V11.92H159.327V22.16C159.327 23.6267 159.701 24.7067 160.447 25.4C161.194 26.0667 162.354 26.4 163.927 26.4C165.074 26.4 166.407 26.2133 167.927 25.84V28.76C167.234 28.92 166.447 29.0667 165.567 29.2C164.714 29.3333 163.967 29.4 163.327 29.4ZM173.348 29V9H176.548V15.28C177.054 13.2533 178.001 11.64 179.388 10.44C180.774 9.21333 182.401 8.6 184.268 8.6C185.948 8.6 187.401 8.98666 188.628 9.76C189.881 10.5333 190.828 11.64 191.468 13.08C192.134 14.4933 192.468 16.1733 192.468 18.12V29H189.268V18.56C189.268 16.4267 188.694 14.7333 187.548 13.48C186.428 12.2267 184.881 11.6 182.908 11.6C181.734 11.6 180.654 11.9067 179.668 12.52C178.708 13.1333 177.948 13.9733 177.388 15.04C176.828 16.1067 176.548 17.28 176.548 18.56V29H173.348ZM208.314 29.4C206.341 29.4 204.554 28.9467 202.954 28.04C201.354 27.1333 200.087 25.9067 199.154 24.36C198.247 22.7867 197.794 21.0267 197.794 19.08C197.794 17.08 198.261 15.2933 199.194 13.72C200.127 12.12 201.394 10.8667 202.994 9.96C204.594 9.05333 206.381 8.6 208.354 8.6C210.301 8.6 212.061 9.05333 213.634 9.96C215.234 10.8667 216.487 12.12 217.394 13.72C218.327 15.2933 218.794 17.0533 218.794 19C218.794 19.0533 218.794 19.12 218.794 19.2C218.794 19.28 218.794 19.3467 218.794 19.4H200.914C200.967 20.7333 201.327 21.9467 201.994 23.04C202.661 24.1067 203.541 24.96 204.634 25.6C205.754 26.2133 206.994 26.52 208.354 26.52C209.847 26.52 211.167 26.1867 212.314 25.52C213.461 24.8267 214.247 23.9333 214.674 22.84H218.074C217.834 24.0133 217.261 25.1067 216.354 26.12C215.474 27.1067 214.341 27.9067 212.954 28.52C211.567 29.1067 210.021 29.4 208.314 29.4ZM215.754 18.6C215.701 17.2667 215.341 16.0667 214.674 15C214.007 13.9067 213.114 13.0533 211.994 12.44C210.901 11.8 209.687 11.48 208.354 11.48C207.021 11.48 205.794 11.8 204.674 12.44C203.581 13.0533 202.687 13.9067 201.994 15C201.327 16.0667 200.967 17.2667 200.914 18.6H215.754ZM225.685 29.32C225.019 29.32 224.445 29.08 223.965 28.6C223.512 28.12 223.285 27.5467 223.285 26.88C223.285 26.1867 223.512 25.6133 223.965 25.16C224.445 24.7067 225.019 24.48 225.685 24.48C226.379 24.48 226.952 24.7067 227.405 25.16C227.859 25.6133 228.085 26.1867 228.085 26.88C228.085 27.5467 227.859 28.12 227.405 28.6C226.952 29.08 226.379 29.32 225.685 29.32ZM234.754 37V9H237.954V15.48C238.541 13.4 239.567 11.7333 241.034 10.48C242.527 9.22666 244.287 8.6 246.314 8.6C248.021 8.6 249.567 9.05333 250.954 9.96C252.341 10.8667 253.434 12.12 254.234 13.72C255.061 15.2933 255.474 17.0533 255.474 19C255.474 20.9467 255.061 22.72 254.234 24.32C253.434 25.8933 252.341 27.1333 250.954 28.04C249.567 28.9467 248.021 29.4 246.314 29.4C244.287 29.4 242.527 28.7733 241.034 27.52C239.567 26.2667 238.541 24.5867 237.954 22.48V37H234.754ZM245.034 26.4C246.367 26.4 247.581 26.08 248.674 25.44C249.767 24.7733 250.634 23.88 251.274 22.76C251.914 21.64 252.234 20.3867 252.234 19C252.234 17.6133 251.914 16.36 251.274 15.24C250.634 14.0933 249.767 13.2 248.674 12.56C247.581 11.8933 246.367 11.56 245.034 11.56C243.701 11.56 242.487 11.8933 241.394 12.56C240.301 13.2 239.434 14.0933 238.794 15.24C238.181 16.36 237.874 17.6133 237.874 19C237.874 20.3867 238.181 21.64 238.794 22.76C239.434 23.88 240.301 24.7733 241.394 25.44C242.487 26.08 243.701 26.4 245.034 26.4ZM261.121 29V0.599998H264.321V29H261.121Z'
        fill='black'
      />
    </svg>
  )
}

export default SVGLogo
