import { View, Text, ScrollView, StyleSheet, Image} from 'react-native'
import React from 'react'

import { USERS } from '../../../data/users'

const InboxScreen = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {USERS.map((story, index) => (
          <View
            key={index}
            style={{ alignItems: 'center' }}
          >
            <Image
              source={{ uri: story.image }}
              style={styles.story}
            />
            <Text style={{ color: 'black' }}>
              {story.user.length > 11
                ? story.user.slice(0, 6).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginLeft: 18,
        marginTop: 10,
        borderWidth: 3,
        borderColor: 'lightblue',
    },
})

export default InboxScreen