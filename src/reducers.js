import { NAVIGATION } from './actions';
import { combineReducers } from 'redux'

const initialState = {
    render: 'home',
  }

function FirstReducer(state = initialState, action) {
    switch (action.type) {
      case NAVIGATION:
        return Object.assign({}, state, {
            render: action.render
        })
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    FirstReducer
  })
  
  export default rootReducer;