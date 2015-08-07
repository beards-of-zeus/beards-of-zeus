module.exports = React.createClass({
  displayName: "Activity",
  render: function() {
    return (
        <div className="row">
          <div className="large-2 columns small-3"><img className="img-round" src={this.props.avatar} /></div>
          <div className="large-10 columns panel radius">
            <p><strong>{this.props.user}:</strong> {this.props.description}</p>
            <ul className="inline-list">
              <li><a href="">Reply</a></li>
              <li><a href="">Share</a></li>
            </ul>
          </div>
        </div>
      )
  }
});