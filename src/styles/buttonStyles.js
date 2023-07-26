import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
    grayOutlinedButton: {
      borderColor: 'lightgray',
      borderWidth: 1,
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 30,
      marginLeft: 5,
      marginTop: 8
   
  },
     buttons: {
   flexDirection: 'row', 
},
   text: {
    fontWeight: 'bold',
    color: 'black'
   }
});

export default buttonStyles;
