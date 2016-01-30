var ArticleList = React.createClass({ 
  render: function() {
    var articleLimit = this.props.articleLimit;
    var articles = this.props.articles;
    var articleNodes = "";
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
    );
  }
});

var Article = React.createClass({
  render: function() {
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        <img src={this.props.image} />
      </div>
    );
  }
});

var MoreButton = React.createClass({
  render: function(){
    return (
      <input type="button" onClick={this.props.onButtonClicked} value="More"/>
    )
  }
});

var ArticleArea = React.createClass({
  noOfNewArticles: 3,
  
  getInitialState: function() {
    return {
      result: '',
      articleLimit: this.noOfNewArticles
    };
  },
  
  componentDidMount: function() {
    $.getJSON("articles.json", function(data) {
      if (this.isMounted()) {
        this.setState({
          result: data
        });
      }
    }.bind(this));
  },
  
  more: function(){
    this.setState({
      articleLimit: this.state.articleLimit + this.noOfNewArticles
    });
  },
  
  render: function() {
    if (this.state.result !== "" && this.state.articleLimit >= this.state.result.length) {
      return (
        <div>
        <h1>Articles</h1>
        <ArticleList articleLimit={this.state.articleLimit} articles={this.state.result}/>
        </div>
      );
    }
    else{
      return (
        <div>
        <h1>Articles</h1>
        <ArticleList articleLimit={this.state.articleLimit} articles={this.state.result}/>
        <MoreButton onButtonClicked={this.more} />
        </div>
      );
    }
  }
});


ReactDOM.render(
  <ArticleArea />,
  document.getElementById('content')
);


