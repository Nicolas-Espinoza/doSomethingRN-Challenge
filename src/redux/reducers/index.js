import { combineReducers } from 'redux'
import taskReducer from './taskReducer'

//recordar que el state es el nombre de la propiedad del objeto
const mainReducer = combineReducers({
  task: taskReducer
})

export default mainReducer