var SearchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();

    var query = React.findDOMNode(this.refs.query).value.trim();
    var startTime = React.findDOMNode(this.refs.startTime).value.trim();
    var endTime = React.findDOMNode(this.refs.endTime).value.trim();

    ApiUtil.addParam({ query: query, startTime: startTime, endTime: endTime });
  },

  _resetHandler: function(event) {
    event.preventDefault();
    ApiUtil.resetPhotos();
    this.clearInputs();
  },

  clearInputs: function() {
    React.findDOMNode(this.refs.query).value = "";
    React.findDOMNode(this.refs.startTime).value = "";
    React.findDOMNode(this.refs.endTime).value = "";
  },

  render: function() {
    return(
      <div className="container query-form clearfix">
        <form onSubmit={this._submitHandler} className="col-md-12 form-inline">
          <fieldset className="form-group col-md-3 query-field">
            <label>Filter by hashtag: </label>
            <input type="text"
                   className="form-control"
                   ref='query'
                   placeholder="Eg. puppies"/>
          </fieldset>

          <fieldset className="form-group col-md-3 query-field">
            <label>Starting Date: </label>
            <input type="date"
                   className="form-control"
                   ref='startTime'/>
          </fieldset>

          <fieldset className="form-group col-md-3 query-field">
            <label>Ending Date: </label>
            <input type="date"
                   className="form-control"
                   ref='endTime'/>
          </fieldset>

          <fieldset className='form-group col-md-3 query-btn'>
            <input type='submit'
                   className="btn btn-default"
                   value="Search"/>
            <button className="btn btn-danger pull-right"
                    onClick={this._resetHandler}> Reset! </button>
          </fieldset>
        </form>

      </div>
    );
  }
});
