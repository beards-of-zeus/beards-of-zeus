module.exports = React.createClass({
  displayName: "Nav",
  logOut: function () {
    localStorage.removeItem('userToken');
  },
  render: function() {
    return (
        <div className="row">
          <div className="large-12 columns">
            <div className="panel radius">
              <a href='/' onClick={this.logOut} className="button tiny radius">Log Out</a>
              <h1>TagAlong.Club</h1>
            </div>
          </div>
        </div>
      )
    }
});