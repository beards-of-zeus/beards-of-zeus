var ToggleUserActivity = require('./toggleUserActivity.jsx');

module.exports = React.createClass({
  displayName: 'ClosedActivities',

  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: [],
    };
  },

  getActivities: function(){
    $.getJSON('/data/closedActivities', {userID: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  render: function(){
    var that = this;
    return (
      <div className="panel callout radius">
        <div className="row">
          <h5 className="small-12 column"> Closed Activities </h5>
        </div>
        { this.state.activityList.map( function(activity) {
            return (
              <div className="row" key={activity.id}>
                <ToggleUserActivity avatar={activity.avatar}  owner={activity.owner} description={activity.description}
            location={activity.location} keywords={activity.keywords}  title={activity.title}/>
                <form action="/data/toggle" method="post" className="small-2 columns leave">
                  <input type='hidden' name='activity_id' value={activity.id}/>
                  <input type='hidden' name='user_id' value={that.props.user_id}/>
                  <button type="submit"><i className="fa fa-plus"></i></button>
              </form> 
              </div>
            )
          })
        }
      </div>
    );
  }
});