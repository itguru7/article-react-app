import React from 'react';
import ReactHtmlParser from 'react-html-parser'; 

class Comment extends React.Component {
  state = {
    likes: 0
  }

  componentDidMount() {
    const { comment } = this.props

    this.setState({
      likes: comment.likes || 0
    })
  }

  onLike = () => {
    const { likes } = this.state

    this.setState({
      likes: likes + 1
    })
  }

  render() {
    const { comment } = this.props
    const { likes } = this.state

    if (comment) {
      return (
        <div className="comment-wrapper">
          <div>{ ReactHtmlParser(comment.commentText) }</div>
          <span>{comment.name}&nbsp;</span>
          <button 
            onClick={this.onLike}
          >{likes}</button>
          {comment.replies && comment.replies.map((comment) => 
            <Comment key={comment.id} comment={comment}/>
          )}
        </div>
      )
    }
  }
}

export default Comment
