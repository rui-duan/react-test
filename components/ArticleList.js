import React, { Component, PropTypes } from 'react'
import Article from './Article'

export default class ArticleList extends Component {

  render() {
    const { articleLimit, articles } = this.props
    if(articles !== ""){
      var articleNodes = articles.map(function(article) {
        if(article.id <= articleLimit){
          return (
          <Article key={article.id} title={article.title} image={article.image}>
          </Article>
          );
        }
      });
    }
    return (
      <div>
        {articleNodes}
      </div>
    )
  }
}

ArticleList.propTypes = {
  articleLimit: PropTypes.number
}