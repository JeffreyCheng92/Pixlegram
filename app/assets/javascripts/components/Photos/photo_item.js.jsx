var Photo = React.createClass({
  mixins: [ReactRouter.History],

  _clickHandler: function() {
    // make modal here
  },

  render: function() {
    var caption = this.props.caption;
    var comments = this.props.comments;
    var tags = this.props.tags;
    var url = this.props.url;
    var likes = this.props.likes;
    var user = this.props.user;
    var idx = this.props.idx;

    return (
      <div onClick={this._clickHandler}>
        {idx}. User: { user }
        <br/>
      </div>
    );
  }
});
