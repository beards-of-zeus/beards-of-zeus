//For webpack, require react components here
var Nav = require('./nav.jsx');
var User = require('./user.jsx');
var Activities = require('./activities.jsx');
var AdSpace = require('./adspace.jsx');
var Footer = require('./footer.jsx');
var ToggleForm = require('./toggleForm.jsx');

module.exports = React.createClass({
  displayName : 'Main',
  render: function(){
    return (
      <div>
        <Nav />
       
        <div className="row">
          <div className="large-4 columns ">
            <User user={this.props.profile} />
          </div>
           
          <div className="large-5 columns">
            <Activities user_id={this.props.profile.user_id}/>
          </div>  

          <aside className="large-3 columns">
            <ToggleForm user_id={this.props.profile.user_id} />
            <AdSpace />
          </aside>
        </div>
      
        <Footer />
      </div>
    )
  }
});

// React.render(<Main />, document.getElementsByTagName('Main')[0]);