import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team/Team';

import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamsData';

class TeamContainer extends React.Component {
static propTypes = {
  setSingleTeam: PropTypes.func.isRequired,
}

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
    const { setSingleTeam } = this.props;

    const teamCard = teams.map((team) => <Team key={team.id} team={team} setSingleTeam={setSingleTeam} />);

    return (
            <div className="card-columns">
              {teamCard}
            </div>
    );
  }
}

export default TeamContainer;
