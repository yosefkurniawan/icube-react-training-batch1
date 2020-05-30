import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  p: {
    marginBottom: 15,
  },
});

const button = (background, color) => ({
  width: '100%',
  height: 45,
  padding: 10,
  textAlign: 'center',
  fontWeight: 'bold',
  backgroundColor: background,
  color: color,
  borderWidth: 1,
  marginBottom: 10,
});

const formStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    // ...button('red', '#fff'),
    width: '100%',
    color: 'red',
  },
});

export {globalStyles, formStyles};
