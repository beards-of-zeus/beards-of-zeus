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
              <h1>TagAlong.Club <a href='/' onClick={this.logOut} className="button radius right">Log Out</a></h1>
            </div>
          </div>
        </div>
      )
    }
});