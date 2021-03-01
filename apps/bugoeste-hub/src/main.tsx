import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

ReactDOM.render(
  <Auth0Provider
    domain="bugoeste.us.auth0.com"
    clientId="dYDMtBdInMuCfyMiJNuHaEQ95A5QOD4q"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
