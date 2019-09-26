import React from 'react';
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'; 

import * as actions from '../actions';

class _Article extends React.Component {

  componentDidMount() {
    this.props.fetchArticle()
  }

  render() {
    const { article } = this.props

    if (!article) {
      return <div></div>
    }

    let dateObj = new Date(article.date * 1000); 
    let dateStr = dateObj.toUTCString(); 

    return (
      <div className="article-wrapper">
        <h2>{article.title}</h2>
        <p>{dateStr}</p>
        <div>{ ReactHtmlParser(article.text) }</div>
      </div>
    )
  }
}

const mapStateToProps = ({ article }) => {
  return {
    article: article
  }
}

const Article = connect(mapStateToProps, actions)(_Article)

export default Article
