module.exports = React.createClass({
  displayName: 'Accounts',
  //Get auth_token
  //Get list of used providers from Auth0 profile
  render: function() {
    return (
      <div className='small-12 columns'>
        <a href='#'><i className='fa fa-fw fa-github'></i></a>
        <a href='#'><i className='fa fa-fw fa-facebook'></i></a>
        <a href='#'><i className='fa fa-fw fa-google-plus'></i></a>
        <a href='#'><i className='fa fa-fw fa-twitter'></i></a>
        <a href='#'><i className='fa fa-fw fa-linkedin'></i></a>
      </div>
    )
  }

});