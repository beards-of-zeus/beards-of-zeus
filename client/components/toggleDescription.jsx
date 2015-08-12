var Description = require('./activityDescription.jsx');
module.exports = React.createClass({
  displayName: 'ToggleDescription',
  getInitialState: function(){
    return {
      showForm: false
    };
  },
  onClick: function(){
    this.setState({
      showForm: !this.state.showForm
    });
  },
  render: function(){
    return (
      <div>
        <button onClick={this.onClick}>{this.state.showForm ? 'Hide' : 'More Details'}</button>
        {this.state.showForm ? <Description description={this.props.description}/> : null}
      </div>
      );
  }
});