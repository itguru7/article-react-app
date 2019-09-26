import { combineReducers } from 'redux'

import article from './articleReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  article,
  comments,
})

export default rootReducer
