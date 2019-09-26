import * as actionTypes from '../actions/actionTypes';

export default (state = null, action) => {

  switch (action.type) {
    case actionTypes.FETCH_ARTICLE:
      return action.article

    default:
      return state
  }
}
