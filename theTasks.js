 getInitialState: function() {
   return {data: []};
 },
 
  function componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
    function handleTaskSubmit(task) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: task,
      function success(data) {
        this.setState({data: data});
      }.bind(this),
      function error(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
 

var taskBox = React.createClass({
  render: function() {
    return (
      <div className="taskBox">
        <h1>Tasks</h1>
        <printTask data={this.state.data} />
        <createTask onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});

ReactDOM.render(
  <taskBox data={data} />,
  document.getElementById('content')
);