
import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  text: '#2c3e50',
  background: '#ecf0f1',
};

export const fonts = {
  regular: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  italic: 'HelveticaNeue-Italic',
};

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
});
