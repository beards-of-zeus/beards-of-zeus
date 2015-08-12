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
          <div className="large-3 columns ">
            <User user={this.props.profile} />
          </div>
           
          <div className="large-6 columns">
            {/*load add activity here using toggle; 
            add and remove class hitting a button*/}
            <Activities user_id={this.props.profile.user_id}/>
          </div>  

          <aside className="large-3 columns hide-for-small">
          {/*Placeholder button */}
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