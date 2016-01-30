import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import MoreButton from './MoreButton'

export default class ArticleArea extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }
  
  componentDidMount() {
    $.getJSON("/data", function(data) {
        this.setState({
          result: data
        });
      
    }.bind(this));
  }
  
  render() {
    const { articleLimit, more } = this.props
    if (this.state.result !== "" && this.props.articleLimit >= this.state.result.length) {
      return (
        <div>
        <h1>Articles</h1>
        <ArticleList articleLimit={this.props.articleLimit} articles={this.state.result}/>
        </div>
      )
    }
    else{
      return (
        <div>
        <h1>Articles</h1>
        <ArticleList articleLimit={this.props.articleLimit} articles={this.state.result}/>
        <MoreButton onButtonClicked={this.props.more} />
        </div>
      )
    }
  }
}

ArticleArea.propTypes = {
  loadMore: PropTypes.func,
  articleLimit: PropTypes.number
}