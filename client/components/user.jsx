var OwnedActivities = require('./ownedActivities.jsx');
var ParticipatingActivities = require('./participatingActivities.jsx');
var ClosedActivities = require('./closedActivities.jsx');
var ToggleUserActivity = require('./toggleUserActivity.jsx');

module.exports = React.createClass({
  displayName: 'User',

  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: []
    }
  },

  getActivities: function(){
    $.getJSON('/data/userActivities', {userID: this.props.user.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  toggle: function(activityId){
    $.post('/data/toggle', {activityId: activityId});
  },

  render: function(){
    var that = this;
    return (
        <div className="panel radius">
            <h3 className="user-name"><a href="#">{this.props.user.name}</a></h3>
            <a href="#"><img className="img-round user-img" src={this.props.user.picture} /></a>
            <div className="section-container vertical-nav owned-activities" data-section data-options="deep_linking: false; one_up: true">
              <OwnedActivities user_id={this.props.user.user_id}/> 
              <ParticipatingActivities user_id={this.props.user.user_id}/>
              <ClosedActivities user_id={this.props.user.user_id}/>
            </div>
          </div>
      )
  }
});
