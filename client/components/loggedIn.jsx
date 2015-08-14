var Main = require('./main.jsx');
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

  componentDidMount: function() {
    this.props.lock.getProfile(this.props.idToken, function (err, profile) {
      if (err) {
        console.log("Error loading the Profile", err);
        localStorage.removeItem('userToken');
        window.location = window.location.hostname;
      }
      {/*POST profile to API /user*/}
      this.setState({profile: profile});
    }.bind(this));
  },

  render: function() {
    if (this.state.profile) {
      this.postApi();
      return ( <Main profile={this.state.profile} /> );
    } else {
      return (
        <div className="logged-in-box auth0-box logged-in">
        </div>);
    }
  }
});