var User = require('./user.jsx');
var Activities = require('./activities.jsx');
var Nav = require('./nav.jsx');

module.exports(React.createClass({
  displayName: 'Profile',
  render: function(){
    return(
      <div>
        <Nav /> 

        {/*Reuse User and Activities setup from main*/}
        <div className="row">
          <div className="large-3 columns ">
            <User user={this.props.profile} />
          </div>

          <div className="large-6 columns">
            <Activities user_id={this.props.profile.user_id}/>
          </div>

        </div>     
      </div>
      );
  }
}));
