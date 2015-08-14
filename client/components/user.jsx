var OpenActivities = require('./participatingActivities.jsx');
var ClosedActivities = require('./closedActivities.jsx');

module.exports = React.createClass({
  displayName: 'User',

  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: [],
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
            <a href="#"><img className="img-round" src={this.props.user.picture} /></a>
            <h5><a href="#">{this.props.user.name}</a></h5>
            <div className="section-container vertical-nav owned-activities" data-section data-options="deep_linking: false; one_up: true">
              <h6> Owned Activities </h6>
              <p> Deactivate </p>
              { this.state.activityList.map( function(activity) {
                  return (
                    <div key={activity.id}>
                      <section className="section">
                      <h5 className="title"><a href="#">{activity.title}</a>
                      <input type='checkbox' onChange={that.toggle.bind(null, activity.id)}/></h5>
                      </section>
                    </div>
                  )
                })
              }
              <OpenActivities user_id={this.props.user.user_id}/>
              <ClosedActivities user_id={this.props.user.user_id}/>
            </div>
          </div>
      )
  }
});