import React from 'react';

import teamShape from '../../helpers/propz/teamShape';

class Team extends React.Component {
    static propTypes = {
      team: teamShape.teamShape,
    }

    render() {
      const { team } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h5>{team.name}</h5></div>
        <div className="card-body">
          <p className="card-title">{team.coach}</p>
          <p className="card-text">{team.players}</p>
          <button className="btn btn-secondary">View Team Roster</button>
          </div>
          </div>
      );
    }
}

export default Team;
