
module.exports = React.createClass({
  displayName: "Activity",
  render: function() {
    return (
        <div className="row">
          <div className="large-2 columns small-3"><img className="img-round" src={this.props.avatar} /></div>
          <div className="large-10 columns panel radius">
            <p><strong>{this.props.title}</strong></p>
            <p><em>{this.props.location}</em></p> <p className="keywords">{this.props.keywords}</p>
            <p>{this.props.description}</p>
          </div>
        </div>
      )
  }
});

{/*module.exports = React.createClass({
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
});*/}