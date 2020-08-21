/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

import './NavBar.scss';

class NavBar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool.isRequired,
    }

    logOutClickEvent = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;

      return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><sup>ACES</sup> | <sub>WILD</sub></a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {
              authed
                ? <button className="nav-link btn btn-danger text-dark logout-button" onClick={this.logOutClickEvent}><i className="fas fa-sign-out-alt"></i> Logout</button>
                : <Auth />
            }
          </li>
        </ul>
      </nav>
      );
    }
}

export default NavBar;
