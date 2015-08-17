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
  {/*Query db for activities NOT belonging to the user*/}
    $.getJSON('/data/activities', {user_id: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  render: function() {
    var that = this;
    return (
      <div>
      {/*Create an Activity component for each item retrieved from db*/}
        { this.state.activityList.map( function(activity) {
            return (
                <div key={activity.id}>
                  <Activity user_id={that.props.user_id} avatar={activity.avatar}  owner={activity.owner} description={activity.description} title={activity.title} 
                  location={activity.location} keywords={activity.keywords} id={activity.id} />
                </div>
              )
          })
        }
      </div>
    )
  }
});