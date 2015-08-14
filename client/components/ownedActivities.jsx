var ToggleUserActivity = require('./toggleUserActivity.jsx');

module.exports = React.createClass({
  displayName: 'OwnedActivities',

  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: [],
    };
  },

  getActivities: function(){
    $.getJSON('/data/userActivities', {userID: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  toggle: function(activityId){
    $.post('/data/toggle', {activityId: activityId});
  },

  render: function(){
    var that = this;
    return (
      <div className="panel callout radius">
        <div className="row">
          <h5 className="small-8 column"> Owned Activities </h5>
          <p className="small-4 column"> Close? </p>
        </div>
        { this.state.activityList.map( function(activity) {
          return (
            <div className="row" key={activity.id}>
              <ToggleUserActivity avatar={activity.avatar}  owner={activity.owner} description={activity.description}
                location={activity.location} keywords={activity.keywords}  title={activity.title}/>
              <input className="small-2 column" type='checkbox' onChange={that.toggle.bind(null, activity.id)}/>
            </div>
          )
        })
      }
      </div>
    );
  }
});
