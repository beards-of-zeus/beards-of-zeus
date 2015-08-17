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
            {/*load add activities here*/}
            <Activities user_id={this.props.profile.user_id}/>
          </div>  

          <aside className="large-3 columns hide-for-small">
            {/*toggle activity creation form*/}
            <ToggleForm user_id={this.props.profile.user_id} />
            <AdSpace />
          </aside>
        </div>
      
        <Footer />
      </div>
    )
  }
});
