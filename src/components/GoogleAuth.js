import React, { Component } from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '768320141321-6nc465mm1dmvseviqknjil9os9uch6d8.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streamy',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
