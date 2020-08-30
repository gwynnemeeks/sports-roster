import React from 'react';
import PropTypes from 'prop-types';

import teamShape from '../../helpers/propz/teamShape';

class Team extends React.Component {
    static propTypes = {
      team: teamShape.teamShape,
      setSingleTeam: PropTypes.func.isRequired,
      deleteTeam: PropTypes.func.isRequired,
      editATeam: PropTypes.func.isRequired,
    }

    singleTeamEvent = (e) => {
      e.preventDefault();
      const { team, setSingleTeam } = this.props;
      setSingleTeam(team.id);
    }

    deleteTeamEvent = (e) => {
      e.preventDefault();
      const { team, deleteTeam } = this.props;
      deleteTeam(team.id);
    }

    editTeamEvent = (e) => {
      e.preventDefault();
      const { editATeam, team } = this.props;
      editATeam(team);
    }

    render() {
      const { team } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h3>{team.name}</h3></div>
        <div className="card-body">
          <div className="card-title"><h4>{team.coach}</h4></div>
          <p className="card-text">{team.players}</p>
          <button className="btn btn-secondary" onClick={this.singleTeamEvent}><i className="fas fa-binoculars fa-lg"></i></button>
          <button className="btn btn-danger" onClick={this.deleteTeamEvent}><i className="fas fa-trash-alt fa-lg"></i></button>
          <button className="btn btn-warning" onClick={this.editTeamEvent}><i className="fas fa-edit fa-lg"></i></button>
          </div>
          </div>
      );
    }
}

export default Team;
