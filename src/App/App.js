import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import NavBar from '../components/NavBar/NavBar';
import SingleTeam from '../components/SingleTeam/SingleTeam';
import TeamContainer from '../components/TeamContainer/TeamContainer';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleTeamId: '',
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

  setSingleTeam = (singleTeamId) => {
    this.setState({ singleTeamId });
  }

  render() {
    const { authed, singleTeamId } = this.state;

    const loadComponent = () => {
      if (authed && singleTeamId.length === 0) {
        return <TeamContainer setSingleTeam={this.setSingleTeam} />;
      }

      if (authed && singleTeamId.length > 0) {
        return <SingleTeam teamId={singleTeamId} setSingleTeam={this.setSingleTeam}/>;
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
