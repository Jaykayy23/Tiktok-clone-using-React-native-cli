import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'


export default function SearchScreen() {
    const [textInput, setTextInput] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setTextInput}
        style={styles.textInput}
        placeholder={'Search'}
      />
      <Text style={{marginLeft: 15}}>Suggested</Text>
      
        <TouchableOpacity style={styles.contain}>
        <Image style={styles.image} source={{uri: 'https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
        <Text style={styles.letters}>Amowke</Text>
        <Text style={styles.friend}>.  Friends</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contains}>
        <Image style={styles.image} source={{uri: 'https://cdn.mos.cms.futurecdn.net/afYAvNsRKCpRxFHaWXqa4D-970-80.jpg.webp'}}/>
        <Text style={styles.letters}>Waltz</Text>
        <Text style={styles.friend}>.  Friends</Text>
      </TouchableOpacity>
      
      
      
      

    </SafeAreaView>
  )
}