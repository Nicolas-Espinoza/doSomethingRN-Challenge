const reducer = (state = [], action) => {
  switch (action.type) {
    case "add_task":
      return [...state, action.payload]
    case "remove_task":
      return state.filter(task => task.key != action.payload)
    default:
      return state
  }
}

export default reducer