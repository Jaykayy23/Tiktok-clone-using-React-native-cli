import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, Image, TouchableOpacity} from 'react-native';

import Video from 'react-native-video';
import styles from './styles';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);
  const [bookMarked, setBookMarked] = useState(false);
  
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress =() => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost( {
        ...post,
        likes: post.likes + likesToAdd
    });
    setIsLiked(!isLiked);
  };

  const onPress =() => {
    const bookMarks = bookMarked ? -1 : 1;
    setPost({
      ...post,
      bookmarks: post.bookmarks + bookMarks
    });
    setBookMarked(!bookMarked) ;
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
      <View>
        <Video
          source={{
            uri: post.videoUri
          }}
          style={styles.video}
          onError={e => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />

        <View style={styles.uiContainer}>
          <View style={styles.rightContainer}>
            <View style={styles.profilePictureContainer}>
              <Image
                style={styles.profilePicture}
                source={{
                  uri: post.user.imageUri
                }}
              />
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
              <AntDesign name={'heart'} size={40} color={isLiked ? 'red' : 'white'} />
              <Text style={styles.statsLabel}>{post.likes}</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
              <FontAwesome name={'commenting'} size={40} color="white" />
              <Text style={styles.statsLabel}>{post.comments}</Text>
            </View>

            <TouchableOpacity style={styles.iconContainer} onPress = {onPress}>
              <FontAwesome name={'bookmark'} size={40} color={bookMarked ? 'yellow' : 'white'} />
              <Text style={styles.statsLabel}>{post.bookmarks}</Text>
            </TouchableOpacity>

            <View style={styles.iconContainer}>
              <Fontisto name={'share-a'} size={35} color="white" />
              <Text style={styles.statsLabel}>{post.shares}</Text>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View>
              <Text style={styles.handle}>{post.user.username}</Text>
              <Text style={styles.description}>{post.description}</Text>

              <View style={styles.songRow}>
                <Entypo name={'beamed-note'} size={20} color="white" />
                <Text style={styles.songName}>{post.song} </Text>
              </View>

              
            </View>
            <Image
                style={styles.songImage}
                source={{
                  uri: post.songImage
                }}
              />
          </View>
        </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
