var Activity = require("./activity.jsx");

module.exports = React.createClass({
  displayName: "Activities",
  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: []
    }
  },

  getActivities: function(){
    $.getJSON('/data/activities', {userID: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        { this.state.activityList.map( function(activity) {
            return (
                <div key={activity.id}>
                  <Activity avatar={activity.avatar}  user={activity.user} description={activity.description} title={activity.title} 
                  location={activity.location} keywords={activity.keywords}/>
                </div>
              )
          })
        }
      </div>
    )
  }
});