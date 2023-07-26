import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ProfileNavBar from '../../components/Post/profile/navBar'
import ProfileHeader from '../../components/Post/profile/navBar/header'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileNavBar/>
      <ProfileHeader/>
    </View>
  )
}