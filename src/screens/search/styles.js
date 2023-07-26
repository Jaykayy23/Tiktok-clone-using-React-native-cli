import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'white',
   
   
    
    
  },
  textInput: {
    margin: 10, 
    backgroundColor: 'lightgray',
    padding: 6,
    borderRadius: 5,
    
  },
  contain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 60,
     height: 60,
     borderRadius: 30,
     marginLeft: 10,
     borderWidth: 3,
     marginTop: 10
  },
  letters: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    marginLeft: 10
    
  },
  friend: {
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 14,
    marginLeft: 10
    
  },
  contains: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    paddingBottom: 500
  },
 
});

export default styles;
