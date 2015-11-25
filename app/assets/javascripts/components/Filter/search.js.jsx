var Search = React.createClass({
  getInitialState: function() {
    return { filterParams: FilterStore.all() };
  },

  componentDidMount: function() {
    FilterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FilterStore.removeChangeListener(this._onChange);
  },

  _onChange: function(event) {
    this.setState({ filterParams: FilterStore.all() }, function() {
      ApiUtil.fetchPhotos(this.state.filterParams);
    });
  },

  render: function() {
    return (
      <div>
        <NavBar/>
        <div className="container">
          Tag: { this.state.filterParams.query }
          <br/>
          From: { this.state.filterParams.startTime } - { this.state.filterParams.endTime }

        </div>
        <SearchForm/>
        <PhotoIndex/>
      </div>
    );
  }

});
