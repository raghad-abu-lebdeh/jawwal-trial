import BUY_CAKE from './cakeTypes'

const initialState = {
  numOfCakes: 10,
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        //in most cases, your object have more than one property so you need to copy the other data that weren't changed using
        //spread operator
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

export default cakeReducer
