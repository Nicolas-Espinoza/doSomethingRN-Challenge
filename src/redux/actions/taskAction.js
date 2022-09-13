//remember we can combine actions with bindActionsCreator (from redux)
//actionsCreator = export * as actionsCreator from '..myActions'
// import { useDispatch } from "react-redux"
// import { bindActionCreators } from "redux"

// const dispatch = useDispatch()
// const {addTask , removeTask} = bindActionCreators(actionsCreator, dispatch)
//after that we can use all functions like actions


export const addTask = (task) => {
  return (dispatch) => {
    dispatch({
      type: "add_task",
      payload: task
    })
  }
}

export const removeTask = (index) => {
  return (dispatch) => {
    dispatch({
      type: "remove_task",
      payload: index
    })
  }
}