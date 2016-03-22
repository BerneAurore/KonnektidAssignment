var printList = React.createClass({
  render: function() {
    var elements = this.props.data.map(function(list) {
      return (
        <Task nameTask={task.nameTask}>
          {task.description}
			  {task.completed}
        </Task>
      );
    });
    return (
      <div className="printList">
        {elements}
      </div>
    );
  }
});