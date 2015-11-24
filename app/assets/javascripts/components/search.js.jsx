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
      ApiUtil.fetchBenches(this.state.filterParams);
    });
  },

  render: function() {
    return (
      <div>
        <SearchForm/>
      </div>
    );
  }

});
