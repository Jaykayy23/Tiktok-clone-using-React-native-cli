import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';
import buttonStyles from '../../../../../styles/buttonStyles';
export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60'  }} style={styles.profilepic} />
      <Text style={styles.text}>@jaykayy23</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Following</Text>
        </View>
        <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Followers</Text>
        </View>
        <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>0</Text>
            <Text style={styles.counterLabelText}>Likes</Text>
        </View>
      </View>
       <View style={buttonStyles.buttons}>
         <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
           <Text style={buttonStyles.text}>Set up profile</Text>
       </TouchableOpacity>
       <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
           <Text style={buttonStyles.text}>Add friends</Text>
       </TouchableOpacity>
       </View>
       <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
           <Text style={buttonStyles.text}>+ Add bio</Text>
       </TouchableOpacity> 
    </View>
   
  );
}

