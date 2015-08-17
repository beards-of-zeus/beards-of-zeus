{/*This component attempts to retrieve the user's profile from the database
  if successful it renders main.jsx using the retrieved profile*/}
var Main = require('./main.jsx');
var Home = require('./home.jsx');

module.exports = React.createClass({
  displayName : 'LoggedIn',

  postApi: function() {
    $.post('/data/user', this.state.profile);
  },

  getInitialState: function() {
    return {
      profile: null
    }
  },
  removeToken: function(){
    localStorage.removeItem('userToken');
    this.setState({profile: null});
  },
  componentDidMount: function() {
    //Run this in a try catch block in case the token gets altered to the point that Auth0 hard errors and throws an exception
    try {
      this.props.lock.getProfile(this.props.idToken, function (err, profile) {
        if (err) {
          this.removeToken();
          return;
        }
        this.setState({profile: profile});
      }.bind(this));
    } catch(e) {
      this.removeToken();
    }
  },
  //If we have a proper profile, load Main. Else, redirect back to Home.
  render: function() {
    if (this.state.profile) {
      this.postApi();
      return ( <Main profile={this.state.profile} /> );
    } else {
      return ( <Home lock={this.props.lock} /> );
    }
  }
});