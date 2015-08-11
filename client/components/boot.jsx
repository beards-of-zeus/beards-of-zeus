var AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || 'Gat2goCXdKhmGCGXYcPzHQ6FhM0tXJwQ';
var AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'tagalong.auth0.com';
//var AUTH0_CALLBACK_URL=location.href;

var App = require('./app.jsx');

React.render(<App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,
  document.getElementById('login-page'));
