import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
   paddingVertical: 20,
   alignItems: 'center',
   paddingHorizontal: 65,
   borderBottomWidth: 1,
   borderColor: 'lightgray'
    },
    profilepic: {
     width: 120,
     height: 120,
     borderRadius: 60,
     marginLeft: 18,
     borderWidth: 3,
     

    },
    counterContainer:{
       paddingBottom: 20,
       flexDirection: 'row' 
    },
    counterItemContainer: {
       flex: 1,
       alignItems: 'center'
    },
    text: {
       padding: 20,
       fontWeight: 'bold',
       fontSize: 19,
       color: 'black',
       marginLeft: 10,
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    counterLabelText: {
        color: 'gray',
        fontSize: 15
    },
 

})

export default styles;