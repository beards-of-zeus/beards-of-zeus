var ToggleUserActivity = require('./toggleUserActivity.jsx');

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
  {/*Queries db for activities the user has signed up for*/}
    $.getJSON('/data/participatingActivities', {user_id: this.props.user_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },

  render: function(){
    var that = this;
    return (
      <div className="panel callout radius">
        <div className="row">
          <h5 className="small-12 column"> Participating Activities </h5>
        </div>
        {/*Render a ToggleUserActivity component for each item in activityList*/}
        { this.state.activityList.map( function(activity) {
            return (
              <div className="row" key={activity.id}>
                <ToggleUserActivity avatar={activity.avatar}  owner={activity.owner} description={activity.description}
            location={activity.location} keywords={activity.keywords}  title={activity.title}/>
                <form action="/data/leave" method="post" className="small-2 columns leave">
                  <input type='hidden' name='activity_id' value={activity.id}/>
                  <input type='hidden' name='user_id' value={that.props.user_id}/>
                  <button type="submit">
                    <span data-tooltip aria-haspopup="true" className="has-tip" title="Leave this activity">
                      <i className="fa fa-minus"></i>
                    </span>
                  </button>
              </form> 
              </div>
            )
          })
        }
      </div>
    );
  }
});