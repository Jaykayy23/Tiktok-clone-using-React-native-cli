import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: Dimensions.get('window').height,
    
    
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: 780,
    justifyContent: 'flex-end',
  },

  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 45
    
  },
  handle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 11,
    marginLeft: 8,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 11,
    marginLeft: 8,
  },
  songRow: {
    flexDirection: 'row',
    marginLeft: 8,
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
    marginLeft: 5,
  },
  songImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 10,
    borderColor: '#4c4c4c',
    
    
    
  },
  //right container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 350,
    justifyContent: 'space-between',
    marginRight: 10,
  },

  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 500,
    marginTop: 2,
  },
});

export default styles;
