module.exports = React.createClass({
  displayName: 'activityDescription',
  render: function(){
    return(
      <div>
        <p>{this.props.description}</p>
      </div>
      );
  }
});