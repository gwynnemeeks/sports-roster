import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team/Team';
import TeamForm from '../TeamForm/TeamForm';

import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamsData';
import smash from '../../helpers/data/smash';

class TeamContainer extends React.Component {
static propTypes = {
  setSingleTeam: PropTypes.func.isRequired,
}

  state = {
    teams: [],
    formOpen: false,
    editTeam: {},
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

  createTeam = (newTeam) => {
    teamData.createTeam(newTeam)
      .then(() => {
        this.getTeam();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('create team went awry', err));
  }

  editATeam = (teamToEdit) => {
    this.setState({ formOpen: true, editTeam: teamToEdit });
  }

  updateTeam = (teamId, editedTeam) => {
    teamData.updateTeam(teamId, editedTeam)
      .then(() => {
        this.getTeam();
        this.setState({ formOpen: false, editTeam: {} });
      })
      .catch((err) => console.error('update boards failed', err));
  }

  render() {
    const { teams, formOpen, editTeam } = this.state;
    const { setSingleTeam } = this.props;

    const teamCard = teams.map((team) => <Team key={team.id} team={team} setSingleTeam={setSingleTeam} deleteTeam={this.deleteTeam} editATeam={this.editATeam}/>);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square fa-lg"></i></button>
      { formOpen ? <TeamForm createTeam={this.createTeam} teamEditing={editTeam} updateTeam={this.updateTeam}/> : '' }
            <div className="card-columns">
              {teamCard}
            </div>
            </div>
    );
  }
}

export default TeamContainer;
