var SearchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();

    var query = React.findDOMNode(this.refs.query).value.trim();
    var startTime = React.findDOMNode(this.refs.startTime).value.trim();
    var endTime = React.findDOMNode(this.refs.endTime).value.trim();

    ApiUtil.addParam({ query: query, startTime: startTime, endTime: endTime });
    this.clearInputs();
  },

  _clickHandler: function(event) {
    event.preventDefault();
    ApiUtil.resetPhotos();
  },

  clearInputs: function() {
    React.findDOMNode(this.refs.query).value = "";
    React.findDOMNode(this.refs.startTime).value = "";
    React.findDOMNode(this.refs.endTime).value = "";
  },

  render: function() {
    return(
      <div className="container">
        <form onSubmit={this._submitHandler} className="col-md-12 form-inline">
          <fieldset className="form-group col-md-3">
            <label>Filter by hashtag: </label>
            <input type="text"
                   className="form-control"
                   ref='query'
                   placeholder="Eg. puppies"/>
          </fieldset>

          <fieldset className="form-group col-md-3">
            <label>Starting Date: </label>
            <input type="date"
                   className="form-control"
                   ref='startTime'/>
          </fieldset>

          <fieldset className="form-group col-md-3">
            <label>Ending Date: </label>
            <input type="date"
                   className="form-control"
                   ref='endTime'/>
          </fieldset>

          <fieldset className='form-group col-md-3 query-btn'>
            <input type='submit'
                   className="btn btn-default"
                   value="Search"/>
          </fieldset>
        </form>
        <button onClick={this._clickHandler}> Reset! </button>
      </div>
    );
  }
});
