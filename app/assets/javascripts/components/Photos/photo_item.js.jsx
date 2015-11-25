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
    var likes = this.props.likes;
    var user = this.props.user;
    var account = "https://www.instagram.com/" + user;
    var idx = this.props.idx;

    return (
      <div className="photo-item">
        <img src={url} className="image"/>
        <br/>
        <a onClick={this._profileHandler} href={account}> {user} </a>
        <br/>
        <br/>
        <div> { caption } </div>
        <br/>
      </div>
    );
  }
});
