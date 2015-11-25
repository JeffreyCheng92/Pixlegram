var SearchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();
    var params = React.findDOMNode(this.refs.query).value.trim();
    React.findDOMNode(this.refs.query).value = "";
    ApiUtil.addParam({ query: params });
  },

  _clickHandler: function(event) {
    event.preventDefault();
    ApiUtil.resetPhotos();
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          <label> Photo Filter: </label>
          <input type="text" ref='query'/>
          <input type='submit' value="Search"/>
        </form>
        <button onClick={this._clickHandler}> Reset! </button>
      </div>
    );
  }
});
