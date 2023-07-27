import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { RNCamera } from 'react-native-camera'
import styles from './styles'

const Camera = () => {
    const [isRecording, setRecording] = useState(false);
  const onRecord = () => {}
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
      />
      <TouchableOpacity onPress={onRecord} style={styles.button}>

      </TouchableOpacity>
    </View>
  )
}

export default Camera