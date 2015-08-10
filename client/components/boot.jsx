var AUTH0_CLIENT_ID='a1Iqj2CYfhvMxrFqzLSWFyaYwmcmjX5m'; 
var AUTH0_DOMAIN='marq1006.auth0.com'; 
var AUTH0_CALLBACK_URL=location.href;
var App = require('./app.jsx');
React.render(<App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,
  document.getElementById('login-page'));
