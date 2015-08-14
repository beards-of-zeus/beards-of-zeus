module.exports = React.createClass({
  displayName: 'OpenActivities',

  componentDidMount: function(){
    this.getActivities();
  },

  getInitialState: function(){
    return {
      activityList: [],
    };
  },

  getActivities: function(){
    $.getJSON('/data/participatingActivities', {userID: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  render: function(){
    var that = this;
    return (
        <div className="panel radius">
          <div className="section-container vertical-nav owned-activities" data-section data-options="deep_linking: false; one_up: true">
            <h6> Participating Activities </h6>
            { this.state.activityList.map( function(activity) {
                return (
                  <div key={activity.id}>
                    <section className="section">
                      <h5 className="title"><a href="#">{activity.title}</a></h5>
                    </section>
                  </div>
                )
              })
            }
          </div>
          </div>
      )
  }
});