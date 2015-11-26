var PhotoNav = React.createClass({
  render: function() {
    return (
      <div className="container page-button">
        <div className="col-md-4 text-center">
          <button className='btn btn-default'
                  disabled={this.props.disableBack()}
                  onClick={this.props._clickBackward}>
                    <i className="fa fa-arrow-left"></i>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <button className="btn btn-danger"
                  onClick={this.props._resetHandler}> Clear! </button>
        </div>
        <div className="col-md-4 text-center">
          <button className='btn btn-default'
                  disabled={this.props.disableForward()}
                  onClick={this.props._clickForward}>
                    <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
});
