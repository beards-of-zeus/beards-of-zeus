var LogOut = React.createClass({
  render : function(){
    return (
    React.render(<App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,
  document.getElementById('login-page')));
  }
});