module.exports = React.createClass({
  displayName : 'Home',
  showLock: function() {
    this.props.lock.show();
  },

  render: function() {
    return (
    <div className="login-box auth0-box before">
      <a onClick={this.showLock} className="btn btn-primary btn-lg btn-login btn-block">Sign In</a>
    </div>);
  }
});
