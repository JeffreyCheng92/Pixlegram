var NavBar = React.createClass({
  _onClick: function(event) {
    event.preventDefault();
    window.open("http://www.jeffreys.info", "_blank");
  },

  render: function() {
    return (
      <div className="nav-bar container">
        <div className="navbar-logo"> Pixlegram </div>
        <div className="jeffrey" onClick={this._onClick}>
          About me!
        </div>
      </div>
    );
  }
});
