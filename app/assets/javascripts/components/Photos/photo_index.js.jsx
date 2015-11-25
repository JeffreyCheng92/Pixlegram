var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotoStore.all() };
  },

  componentDidMount: function() {
    PhotoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PhotoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState( { photos: PhotoStore.all() });
  },

  render: function() {
    return (
      <div>
        {
          this.state.photos.map(function(photo, idx) {
            return (
              <Photo photo={photo} key={idx} />
            );
          })
        }
      </div>
    );
  },



});
