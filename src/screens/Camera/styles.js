import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
    },
   preview: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems:"center"
   },
   button:{
    alignSelf: 'center',
    marginVertical: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff4343'
   }

});

export default styles