import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class TeamForm extends React.Component {
    static propTypes = {
      createTeam: PropTypes.func.isRequired,
    }

    state = {
      name: '',
      players: '',
      coach: '',
    }

    changeNameEvent = (e) => {
      e.preventDefault();
      this.setState({ name: e.target.value });
    }

    changePlayersEvent = (e) => {
      e.preventDefault();
      this.setState({ players: e.target.value });
    }

    changeCoachEvent = (e) => {
      e.preventDefault();
      this.setState({ coach: e.target.value });
    }

    saveTeamEvent = (e) => {
      e.preventDefault();
      const { name, players, coach } = this.state;
      const { createTeam } = this.props;

      const newTeam = {
        name,
        players,
        coach,
        uid: authData.getUid(),
      };
      createTeam(newTeam);
      console.warn('here is a new team', newTeam);
    }

    render() {
      return (
          <form className="col 6 offset-3">
              <div className="form-group">
                  <label htmlFor="name">Team Name</label>
                  <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Team Name"
                  onChange={this.changeNameEvent}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="players">Player Type</label>
                  <input
                  type="text"
                  className="form-control"
                  id="players"
                  placeholder="Enter Player Type"
                  onChange={this.changePlayersEvent}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="coach">Team Name</label>
                  <input
                  type="text"
                  className="form-control"
                  id="coach"
                  placeholder="Enter Coach Name"
                  onChange={this.changeCoachEvent}
                  />
              </div>
              <button className="btn btn-dark" onClick={this.saveTeamEvent}>Save Team</button>
          </form>
      );
    }
}

export default TeamForm;
