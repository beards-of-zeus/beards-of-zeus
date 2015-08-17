var UserActivity = require('./userActivity.jsx');

module.exports = React.createClass({
  displayName: 'ToggleUserActivities',
  getInitialState: function(){
    return {
      showActivity: false 
    };
  },
  onClick: function(){
    this.setState({
      showActivity: !this.state.showActivity
    });
  },
  render: function(){
    return (
      <div className="small-10 columns user-activity">
        <p className="small-10 column title" onClick={this.onClick}>{this.props.title}</p>
        {this.state.showActivity ? <UserActivity avatar={this.props.avatar} owner={this.props.owner} description={this.props.description}
                  location={this.props.location} keywords={this.props.keywords}/> : null}
      </div>
      );
  }
});