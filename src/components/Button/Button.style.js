import {StyleSheet} from 'react-native';

const base_style = StyleSheet.create({
  button_container: {
    margin: 10,
    borderRadius: 5,
    padding: 10,
    marginBottom: -15,
    marginTop: 30,
  },
  button_text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    button_container: {
      ...base_style.button_container,
      backgroundColor: '#ffffff',
    },
    button_text: {
      ...base_style.button_text,
      color: '#002171',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    button_container: {
      ...base_style.button_container,
      backgroundColor: '#002171',
    },
    button_text: {
      ...base_style.button_text,
      color: '#ffffff',
    },
  }),
};
