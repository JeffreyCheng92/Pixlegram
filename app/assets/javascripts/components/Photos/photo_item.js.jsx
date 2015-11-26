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
    var link = this.props.instalink;
    var account = "https://www.instagram.com/" + user;
    var idx = this.props.idx;
    var media;

    if (this.props.video) {
      return (
        <div className="photo-item">
          <video src={vid_url.url} controls/>

          <div className="col-md-12">
            <div className="col-md-4 pull-left">
              <i className="fa fa-instagram"></i>
              <a href={link}> Link </a>
            </div>

            <div className="col-md-4 text-center">
              <i className="fa fa-heart"></i> {likes}
            </div>

            <div className="col-md-4 pull-right">
              <a onClick={this._profileHandler} href={account}>
                <i className="fa fa-user"></i> {user}
              </a>
            </div>
          </div>

          <div> { caption } </div>
        </div>
      );
    } else {
      return (
        <div className="photo-item">
          <img src={url}/>

          <div className="col-md-12">
            <div className="col-md-4 pull-left">
              <i className="fa fa-instagram"></i>
              <a href={link}> Source </a>
            </div>

            <div className="col-md-4 text-center">
              <i className="fa fa-heart"></i> {likes}
            </div>

            <div className="col-md-4 pull-right">
              <a onClick={this._profileHandler} href={account}>
                <i className="fa fa-user"></i> {user}
              </a>
            </div>
          </div>

          <div> { caption } </div>
        </div>
      );
    }
  }
});
