import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

class Auth extends React.Component {
    loginClickEvent = (e) => {
      e.preventDefault();
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleProvider);
    }

    render() {
      return (
            <div className="Auth">
                <button className="btn btn-warning" onClick={this.loginClickEvent}><i className="fab fa-google-plus-square fa-lg"></i> Log In</button>
            </div>
      );
    }
}

export default Auth;
