import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

class TeamForm extends React.Component {
    static propTypes = {
      createTeam: PropTypes.func.isRequired,
      updateTeam: PropTypes.func.isRequired,
      teamEditing: PropTypes.object.isRequired,
    }

    state = {
      name: '',
      players: '',
      coach: '',
      isEditing: false,
    }

    componentDidMount() {
      const { teamEditing } = this.props;
      if (teamEditing.name) {
        this.setState({
          name: teamEditing.name,
          players: teamEditing.players,
          coach: teamEditing.coach,
          isEditing: true,
        });
      }
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
    }

    editTeamEvent = (e) => {
      e.preventDefault();
      const { name, players, coach } = this.state;
      const { updateTeam, teamEditing } = this.props;

      const teamWithChanges = {
        name,
        players,
        coach,
        uid: authData.getUid(),
      };
      updateTeam(teamEditing.id, teamWithChanges);
    }

    render() {
      const {
        name,
        players,
        coach,
        isEditing,
      } = this.state;
      return (
          <form className="col 6 offset-3">
              <div className="form-group">
                  <label htmlFor="name">Team Name</label>
                  <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Team Name"
                  value={name}
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
                  value={players}
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
                  value={coach}
                  onChange={this.changeCoachEvent}
                  />
              </div>
              {
                isEditing
                  ? <button className="btn btn-light" onClick={this.editTeamEvent}>Edit Team</button>
                  : <button className="btn btn-dark" onClick={this.saveTeamEvent}>Save Team</button>
              }

          </form>
      );
    }
}

export default TeamForm;
