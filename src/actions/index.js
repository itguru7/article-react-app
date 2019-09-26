import * as actionTypes from './actionTypes';
import { articleAPI, commentsAPI } from '../utils';

export const fetchArticle = () => dispatch => {
  articleAPI.get()
  .then(res => {
    dispatch({
      type: actionTypes.FETCH_ARTICLE,
      article: res
    })  
  })
}

export const fetchComments = () => dispatch => {
  commentsAPI.get()
  .then(res => {
    dispatch({
      type: actionTypes.FETCH_COMMENTS,
      comments: res
    })  
  })
}
