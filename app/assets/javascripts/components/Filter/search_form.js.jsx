var SearchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();
    
    var query = React.findDOMNode(this.refs.query).value.trim();
    var startTime = React.findDOMNode(this.refs.startTime).value.trim();
    var endTime = React.findDOMNode(this.refs.endTime).value.trim();

    this.clearInputs();
    ApiUtil.addParam({ query: query, startTime: startTime, endTime: endTime });
  },

  _clickHandler: function(event) {
    event.preventDefault();
    ApiUtil.resetPhotos();
  },

  clearInputs: function() {
    React.findDOMNode(this.refs.query).value = "";
    React.findDOMNode(this.refs.startTime).value = "";
    React.findDOMNode(this.refs.endTIme).value = "";
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          <label> Photo Filter: </label>
          <input type="text" ref='query'/>
          <br/>
          <label> Start Date: </label>
          <input type='date' ref='startTime'/>
          <br/>
          <label> End Date: </label>
          <input type='date' ref='endTime'/>
          <br/>
          <input type='submit' value="Search"/>
        </form>
        <button onClick={this._clickHandler}> Reset! </button>
      </div>
    );
  }
});
