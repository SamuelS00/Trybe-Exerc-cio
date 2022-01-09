const INITIAL_STATE =  []
  
  function reducerTask(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'NEW_TASK':
        return [...state, action.value]
      case 'REMOVE_TASK':
        return [...state.filter((task) => task !== action.value)]
      default:
        return state;
    }
  }
  
export default reducerTask;
