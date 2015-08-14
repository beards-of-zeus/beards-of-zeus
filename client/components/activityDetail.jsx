var Activity = require('./activity.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      viewDetails: false
    }
  },
  onClick: function(){
    viewDetails: !this.state.viewDetails
  },
  getActivity: function(){
    $.getJSON('/data/activities', {id: this.props.activity_id}).done(function(activities){
       this.setState({activityList: activities});
    }.bind(this));
  },
  render: function(){
    <div>
      <button onClick={this.onClick}>{this.state.showForm ? 'Cancel' : 'Activity Details'}</button>
      {this.state.showForm ? <Create user_id={this.props.user_id}/> : null}
    </div>
  }
});

