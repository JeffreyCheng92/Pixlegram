var Photo = React.createClass({
  _profileHandler: function(event) {
    event.preventDefault();
    var url = event.currentTarget.href;
    window.open(url, '_blank');
  },

  render: function() {
    var caption = this.props.caption;
    var comments = this.props.comments;
    var tags = this.props.tags;
    var url = this.props.url;
    var vid_url = this.props.vid_url;
    var likes = this.props.likes;
    var user = this.props.user;
    var account = "https://www.instagram.com/" + user;
    var idx = this.props.idx;
    var media;

    if (this.props.video) {
      Media = React.createElement('video', { src: vid_url, className: media });
    } else {
      Media = React.createElement('img', { src: vid_url, className: media });
    }

    return (
      <div className="photo-item">
        <Media/>
        <br/>
        <a onClick={this._profileHandler} href={account}> {user} </a>
        <br/>
        <div> { caption } </div>
        <br/>
      </div>
    );
  }
});
