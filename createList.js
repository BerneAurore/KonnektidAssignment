var createList = React.createClass({

  getInitialStateList: function() {
    return {nameList: '', descriptionList:''};
  },
  handleNameListChange: function(e) {
    this.setState({nameTask: e.target.value});
  },
  handleDescriptionListChange: function(e) {
    this.setState({descriptionList: e.target.value});
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    var nameList = this.state.nameList.trim();
    var descriptionList = this.state.descriptionList.trim();
    if (!descriptionList || !nameList) {
      return;
    }
	this.props.onCommentSubmit({nameList: nameList, descriptionList: descriptionList);
    this.setState({nameList: '', descriptionList: ''});
  },

  render: function() {
    return (
		<form className="createList" onSubmit={this.handleSubmit}>
		<input 
			type="text" 
			placeholder="Name of the list"
			value={this.state.nameList}
			onChange={this.handleNameListChange}
		/>
		<input 
			type="text" 
			placeholder="Description"
			value={this.state.descriptionList}
			onChange={this.handleDescriptionListChange}
		/>
		}
		
        <input type="submit" value="Post" />
      </form>
    );
  }
});