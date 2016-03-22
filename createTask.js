var createTask = React.createClass({

  function getInitialState() {
    return {nameTask: '', description:'', completed:0};
  },
  function handleNameTaskChange(e) {
    this.setState({nameTask: e.target.value});
  },
  function handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  },
  function handleCompletedChange(e) {
    this.setState({c: e.target.value});
  },
  function handleSubmit(e) {
    e.preventDefault();
    var nameTask = this.state.nameTask.trim();
    var description = this.state.description.trim();
	var completed = this.state.completed.trim();
    if (!description || !nameTask ||!completed) {
      return;
    }
	this.props.onCommentSubmit({nameTask: nameTask, description: description, completed:completed});
    this.setState({nameTask: '', description: '', completed:0});
  },

  function render() {
    return (
		<form className="createTask" onSubmit={this.handleSubmit}>
		<input 
			type="text" 
			placeholder="Name of the task"
			value={this.state.nameTask}
			onChange={this.handleNameTaskChange}
		/>
		<input 
			type="text" 
			placeholder="Description"
			value={this.state.description}
			onChange={this.handleDescriptionChange}
		/>
		<input 
			type="checkbox" 
			placeholder="Completed ?"
			value={this.state.c}
			onChange={this.handleCompletedChange}/>
		}
		
        <input type="submit" value="Post" />
      </form>
    );
  }
});