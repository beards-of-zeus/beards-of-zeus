// var Nav = require('./home/nav.jsx');
var Banner = require('./home/banner.jsx');
var TestimonialGroup = require('./home/testimonialgroup.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({
  displayName : 'Home',
  showLock: function() {
    this.props.lock.show();
  },

  render: function() {
    return (
      <div>
        <div className="login-box auth0-box before row">
          <div className="column large-10"></div>
          <div className="column large-2">
            <a onClick={this.showLock} className="button radius right btn-login">Sign In</a>
          </div>
        </div>
        <div className="row">
          <div className="large-12 columns">
            <Banner/>
            <div className="row">
              <div className="large-12 columns">
                <TestimonialGroup/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});
