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
    var idx = 0;
    var video;
    return (
      <div className="container photo-index">
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
    );
  },



});
