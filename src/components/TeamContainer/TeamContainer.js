import React from 'react';

import Team from '../Team/Team';

import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamsData';

class TeamContainer extends React.Component {
  state = {
    teams: [],
  }

  componentDidMount() {
    teamData.getTeamsByUid(authData.getUid())
      .then((teams) => this.setState({ teams }))
      .catch((err) => console.error('get teams failed', err));
  }

  render() {
    const { teams } = this.state;

    const teamCard = teams.map((team) => <Team key={team.id} team={team} />);

    return (
            <div className="card-columns">
              {teamCard}
            </div>
    );
  }
}

export default TeamContainer;
