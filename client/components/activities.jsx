var Activity = require("./activity.jsx");

module.exports = React.createClass({
  displayName: "Activities",
  render: function() {
    return (
      <div>
        { this.props.activities.map( function(activity) {
            return (
                <div key={activity.id}>
                  <Activity avatar={activity.avatar}  user={activity.user} description={activity.description} />
                </div>
              )
          })
        }
      </div>
    )
  }
});