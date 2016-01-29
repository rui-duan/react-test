var ArticleList = React.createClass({
  getInitialState: function() {
    return {
      result: ''
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

  render: function() {
    var articleLimit = this.props.articleLimit;
    var articleNodes = "";
    if(this.state.result !== ""){
      var articleNodes = this.state.result.map(function(article) {
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

var ArticleBox = React.createClass({
  noOfNewArticles: 3,
  getInitialState: function() {
    return {
      articleLimit: this.noOfNewArticles
    };
  },
  
  more: function(){
    this.setState({
      articleLimit: this.state.articleLimit + this.noOfNewArticles
    });
  },
  
  render: function() {
    return (
      <div>
      <ArticleList articleLimit={this.state.articleLimit} />
      <MoreButton onButtonClicked={this.more} />
      </div>
    );
  }
});

var ArticleArea = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Articles</h1>
        <ArticleBox />
      </div>
    );
  }
});


ReactDOM.render(
  <ArticleArea />,
  document.getElementById('content')
);


