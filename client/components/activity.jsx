var ToggleDescription = require('./toggleDescription.jsx');

module.exports = React.createClass({
  displayName: "Activity",
  render: function() {
    return (
        <div className="row">
          <div className="large-2 columns small-3"><img className="img-round" src={this.props.avatar} /></div>
          <div className="large-10 columns panel radius">
            <p><strong>{this.props.title}:</strong> {this.props.description.slice(0, 70)}</p>
            <p><em>{this.props.location}</em></p> <p className="keywords">{this.props.keywords}</p>
            <ul className="inline-list">
              <ToggleDescription description={this.props.description} />
              <li><a href="">Share</a></li>
            </ul>
          </div>
        </div>
      )
  }
});