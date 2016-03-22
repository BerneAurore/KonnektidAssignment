var Task = React.createClass({
  function rawMarkup() {
    var rawMarkup = marked(this.props.desription.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
  
  function render() {
    return (
      <div className="task">
        <h2 className="nameTask">
          {this.props.nameTask}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
		{marked(this.props.completed.toString())}
      </div>
    );
  }
});