import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050000'
  },
  text: {
    color: 'black'
  },
  task: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cea4a6',
    width: '100%',
    height: '25%',
    marginBottom: 50,
    borderBottomLeftRadius: 90,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 35
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  title: {
    fontSize: 40,
    color: '#f0f0f0'
  },
  subtitle: {
    fontSize: 25,
    color: '#f0f0f0'
  },
  boxTitle: {
    color: '#f0f0f0',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 4
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    paddingHorizontal: 50
  },
  button: {
    width: 130,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#7fda89',
  },
  buttonText: {
    color: 'black'
  },
  largeButton: {
    width: 310,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#7fda89',
  }
})