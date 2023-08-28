import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ( { iconUrl, dimension, handlePress} ) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress} >
      <Image
        style={styles.btnImg(dimension)}
        source={iconUrl}
        resizeMode='cover'
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn