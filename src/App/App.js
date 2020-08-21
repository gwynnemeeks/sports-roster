import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import NavBar from '../components/NavBar/NavBar';
import TeamContainer from '../components/TeamContainer/TeamContainer';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return <TeamContainer />;
      }
      return '';
    };

    return (
      <div className="App">
        <NavBar authed={authed} />
        {/* <button className="btn btn-dark"><i className="fab fa-pagelines fa-lg"></i></button> */}
        {loadComponent()}
      </div>
    );
  }
}

export default App;
