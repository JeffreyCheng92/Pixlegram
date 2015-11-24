var SearchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();
    var params = React.findDOMNode(this.refs.query).value.trim();
    if (params.trim() !== "") {
      ApiUtil.addParam({ query: params });
    }
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          <label> Photo Filter: </label>
          <input type="text" ref='query'/>
          <input type='submit' value="Search"/>
        </form>
        <br/>
      </div>
    );
  }
});
