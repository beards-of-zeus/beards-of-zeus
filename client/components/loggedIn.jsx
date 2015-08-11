var Main = require('./main.jsx');
module.exports = React.createClass({
  displayName : 'LoggedIn',
    
  logOut : function(){
    localStorage.removeItem('userToken');
    window.location = 'https://tagalong.auth0.com/v2/logout?returnTo=http://localhost:4568';
  },

  getInitialState: function() {
    return {
      profile: null
    }
  },

  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        alert("Error loading the Profile");
      }
      //POST profile to API /user
      this.setState({profile: profile});
    }.bind(this));
  },

  render: function() {
    if (this.state.profile) {
      return (
        <div className="logged-in-box auth0-box logged-in">
          <button onClick={this.logOut} className="btn btn-lg btn-primary">Log Out</button>
          <img src={this.state.profile.picture} />
          <h2>Welcome {this.state.profile.nickname}</h2>
          < Main />
        </div>);
    } else {
      return (
        <div className="logged-in-box auth0-box logged-in">
          <h1 id="logo"><img src="https://cdn.auth0.com/blog/auth0_logo_final_blue_RGB.png" /></h1>
        </div>);
    }
  }
});
