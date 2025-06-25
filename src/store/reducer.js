const initialState = {
  code: '1337',
  value: '',
  bg: '#282c34'
};

  const reducer = (state = initialState, action) => {

  if ((action.type === "ADD_SYMBOL") && (state.value === "Access Granted" || state.value === "ERROR"))
    {
      return {
        code: state.code,
        bg: '#282c34',
        value: action.payload
      }
    }

  if ((action.type ===  "DELETE_SYMBOL" || action.type === "ENTER" ) && (state.value === "Access Granted" || state.value === "ERROR"))
    {
      return {
        code: state.code,
        bg: '#282c34',
        value: ''
      }
    }

  if (action.type === "ADD_SYMBOL" && state.value.length < 4)
    {
      return {  
        code: state.code,
        bg: state.bg,
        value: state.value + action.payload
      }; 
    }
  if (action.type === "DELETE_SYMBOL" && state.value.length > 0)
    {
      return {  
        code: state.code,
        bg: state.bg,
        value: state.value.slice(0, -1)
      }; 
  }
  
  if (action.type === "ENTER" && state.value.length === 4 && (state.code === state.value))
    {
      return {  
        code: state.code,
        bg: '#058f00', 
        value: "Access Granted"
      }; 
    }
  else if (action.type === "ENTER" && state.value.length === 4 && (state.code !== state.value))
    {
      return {  
        code: state.code,
        bg: '#c40000',
        value: "ERROR"
      }; 
  }

  return state;
};

export default reducer;
