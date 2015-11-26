var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotoStore.all(), page: 1 };
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

  disableBack: function() {
    return (this.state.page === 1);
  },

  disableForward: function() {
    return (this.state.photos.length === 0);
  },

  _clickForward: function(event) {
    event.preventDefault();
    this.setState({ page: this.state.page + 1 });
    ApiUtil.nextPhotos();
  },

  render: function() {
    var idx = 0;
    var video;
    return (
      <div>
        <div className="container page-button">
          <div className="col-md-6 text-center">
            <button className='btn btn-default'
                    disabled={this.disableBack()}> Back </button>
          </div>
          <div className="col-md-6 text-center">
            <button className='btn btn-default'
                    disabled={this.disableForward()}
                    onClick={this._clickForward}> Forward </button>
          </div>
        </div>
        <div className="photo-index container">
          {
            this.state.photos.map(function(photo) {
              idx++;
              video = (photo.type === "video");
              if (!video) {
                photo.videos = { standard_resolution: null };
              }
              return (
                <Photo caption={photo.caption.text}
                         comments={photo.comments.data}
                         tags={photo.tags}
                         url={photo.images.standard_resolution.url}
                         likes={photo.likes.count}
                         user={photo.user.username}
                         idx={idx}
                         vid_url={photo.videos.standard_resolution}
                         video={video}
                         key={idx} />
              );
            })
          }
        </div>
      </div>
    );
  },



});
