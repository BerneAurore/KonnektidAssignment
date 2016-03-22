var List = React.createClass({
  function rawMarkup() {
    var rawMarkup = marked(this.props.desriptionList.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  
  function render() {
    return (
      <div className="list">
        <h2 className="nameList">
          {this.props.nameList}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
		{marked(this.props.completed.toString())}
		
      </div>
    );
  }
});