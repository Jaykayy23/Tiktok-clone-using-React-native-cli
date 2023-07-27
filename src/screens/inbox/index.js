import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {USERS} from '../../../data/users';
import ChatsScreen from '../ChatScreen';

const InboxScreen = () => {
  return (
    <View >
      <View style={styles.container}>
        <TouchableOpacity>
          <AntDesign name={'addfolder'} size={30} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.text}>Inbox</Text>
        <TouchableOpacity>
          <AntDesign name={'search1'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={storyStyles.story} />
            <Text style={{color: 'black'}}>
              {story.user.length > 11
                ? story.user.slice(0, 6).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>

      <ChatsScreen/>
    </View>
  );
};

const storyStyles = StyleSheet.create({
  story: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginLeft: 18,
    marginTop: 10,
    borderWidth: 3,
    borderColor: 'lightblue',
  },
});

export default InboxScreen;
