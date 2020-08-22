import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team/Team';

import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamsData';
import smash from '../../helpers/data/smash';

class TeamContainer extends React.Component {
static propTypes = {
  setSingleTeam: PropTypes.func.isRequired,
}

  state = {
    teams: [],
  }

  getTeam = () => {
    teamData.getTeamsByUid(authData.getUid())
      .then((teams) => this.setState({ teams }))
      .catch((err) => console.error('get teams failed', err));
  }

  componentDidMount() {
    this.getTeam();
  }

  deleteTeam = (teamId) => {
    smash.removeTeamAndPlayers(teamId)
      .then(() => {
        this.getTeam();
      })
      .catch((err) => console.error('delete team sucks', err));
  }

  render() {
    const { teams } = this.state;
    const { setSingleTeam } = this.props;

    const teamCard = teams.map((team) => <Team key={team.id} team={team} setSingleTeam={setSingleTeam} deleteTeam={this.deleteTeam}/>);

    return (
            <div className="card-columns">
              {teamCard}
            </div>
    );
  }
}

export default TeamContainer;
