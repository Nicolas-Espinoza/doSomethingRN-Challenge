import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#041122',
  },
  text: {
    color: 'black',
    marginTop: 8,
    fontSize: 15
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7fda89',
    width: 320,
    height: 80,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 100,
    padding: 10,
  },
  scrollView: {
    width: '80%',
    backgroundColor: '#041122',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 38,
    marginBottom: 15,
    marginTop: 35,
    color: 'white'
  },
  subtitle: {
    fontSize: 23,
    marginBottom: 15,
    color: 'white'
  },
  cancel: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  titleNoTask: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600'
  },
  noTaskContainer: {
    marginTop: 180
  }
})