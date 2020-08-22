import React from 'react';
import PropTypes from 'prop-types';

import teamShape from '../../helpers/propz/teamShape';

class Team extends React.Component {
    static propTypes = {
      team: teamShape.teamShape,
      setSingleTeam: PropTypes.func.isRequired,
    }

    singleTeamEvent = (e) => {
      e.preventDefault();
      const { team, setSingleTeam } = this.props;
      setSingleTeam(team.id);
    }

    render() {
      const { team } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h3>{team.name}</h3></div>
        <div className="card-body">
          <div className="card-title"><h4>{team.coach}</h4></div>
          <p className="card-text">{team.players}</p>
          <button className="btn btn-secondary" onClick={this.singleTeamEvent}>View Team Roster</button>
          </div>
          </div>
      );
    }
}

export default Team;
