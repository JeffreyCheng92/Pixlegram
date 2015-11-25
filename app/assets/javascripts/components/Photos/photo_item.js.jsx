var Photo = React.createClass({
  mixins: [ReactRouter.History],

  _clickHandler: function() {
    // make modal here
  },

  render: function() {
    var photo = this.props.photo;

    return (
      <div onClick={this._clickHandler}>
        { photo }
      </div>
    );
  }
});
