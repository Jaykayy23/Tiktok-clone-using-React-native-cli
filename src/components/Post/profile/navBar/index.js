import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function ProfileNavBar() {
  return (
    <View style={styles.container}>
      
      <Text  style={styles.text} >Jordan</Text>
      <TouchableOpacity>
        <Feather name={'menu'} size={30} color= {'black'}/>
      </TouchableOpacity>
      

      
    </View>
  )
}