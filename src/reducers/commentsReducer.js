import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {

  switch (action.type) {
    case actionTypes.FETCH_COMMENTS:
      return action.comments

    default:
      return state
  }
}
