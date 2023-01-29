import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBottomWidth: 5,
    borderColor: '#002171',
    borderRadius: 10,
    margin: 7,
    padding: 10,
    backgroundColor: '#2196f3',
  },
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    fontStyle: 'italic',
    color: '#eeeeee',
  },
  date: {
    fontStyle: 'italic',
    color: '#eeeeee',
  },
  message_container: {
    paddingTop: 15,
    paddingBottom: 3,
  },
  message: {
    color: 'white',
    fontWeight: '400',
  },
});
