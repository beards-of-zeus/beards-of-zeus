var Create = require('./createActivity.jsx');
module.exports = React.createClass({
  displayName: 'ToggleForm',
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
        <button className="show-hide-form" onClick={this.onClick}>
          {this.state.showForm ? 'Cancel' : 'Create an Activity'}
        </button>
        {this.state.showForm ? <Create user_id={this.props.user_id}/> : null}
      </div>
    );
  }
});