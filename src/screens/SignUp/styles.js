import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#041122'
  },
  input: {
    borderWidth: 2,
    borderColor: '#F9F9F9',
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    width: 285,
    height: 45,
    color: '#e6f99d',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#7fda89'
  },
  text: {
    fontSize: 25,
    marginBottom: 25
  },
  registerButton: {
    borderWidth: 1,
    borderColor: '#F9F9F9',
    width: 170,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#041122'
  },
  buttonText: {
    color: 'white'
  },
  linkText: {
    color: '#d76483',
    fontSize: 16
  },
  footerText: {
    marginTop: 15,
    color: 'white'
  },
  textError: {
    fontSize: 14,
    color: '#ff6e49'
  },
  spacing: {
    height: 35,
    justifyContent: 'center',
  },
  showPassword: {
    height: 45,
    marginBottom: 25
  },
  show: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 11,
    right: 18
  }
})