module.exports = React.createClass({
  displayName: "UserActivity",
  render: function() {
    return (
        <div className="row">
          <div className="small-12 columns panel radius user-details">
            <p className="user-description">{this.props.description}</p>
            <p className="user-location">{this.props.location}</p> 
            <p className="user-keywords">{this.props.keywords}</p>
          </div>
        </div>
      )
  }
});
