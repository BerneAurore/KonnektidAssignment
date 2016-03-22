var printTask = React.createClass({
  function render() {
    var elements = this.props.data.map(function(task) {
      return (
        <Task nameTask={task.nameTask}>
          {task.description}
			  {task.completed}
        </Task>
      );
    });
    return (
      <div className="printTask">
        {elements}
      </div>
    );
  }
});