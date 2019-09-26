import React from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions';
import Comment from './Comment';

class _CommentsList extends React.Component {

  componentDidMount() {
    this.props.fetchComments()
  }

  render() {
    const { comments } = this.props

    return (
      <div>
        <h3>Comments</h3>
        {comments.map((comment) => 
          <Comment key={comment.id} comment={comment}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    comments: comments
  }
}

const CommentsList = connect(mapStateToProps, actions)(_CommentsList)

export default CommentsList
