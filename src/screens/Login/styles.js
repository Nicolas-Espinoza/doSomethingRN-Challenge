import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#041122'
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    width: 280,
    height: 45,
    color: 'white',
    marginBottom: 35,
    textAlign: 'center',
    borderColor: '#259073'
  },
  loginButton: {
    width: 180,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 25,
    borderColor: '#7fda89'
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 50,
    marginBottom: 100,
    transform: [
      {
        rotate: '15deg'
      },
    ]
  },
  createOneTitle: {
    color: '#c8e98e'
  },
  showPassword: {
    height: 45,
    marginBottom: 25
  },
  show: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 11,
    right: 15
  },
})