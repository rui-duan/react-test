var ArticleList = React.createClass({
  /*getInitialState: function() {
    return {
      result: ''
    };
  },
  
  componentDidMount: function() {
    $.getJSON("articles.json", function(data) {
      console.log(data);
      //var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          result: data
        });
      }
    }.bind(this));
  },*/

  render: function() {
    var articleNodes = "";
    $.getJSON("articles.json", function(data) {
      var articleNodes = data.map(function(article) {
        //console.log(article.title);
        return (
          <Article title={article.title} image={article.image}>
          </Article>
        );
      });
    });
    
      return (
        <div>
          {articleNodes}
        </div>
      );
  }
});

var Article = React.createClass({
  render: function() {
  	
  console.log("a");
    return (
      <div>
        <h2>
          {this.props.title}
        </h2>
        {this.props.image}
      </div>
    );
  }
});

var ArticleBox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Articles</h1>
        <ArticleList />
      </div>
    );
  }
});


ReactDOM.render(
  <ArticleBox />,
  document.getElementById('content')
);


