import React from 'react';
import PropTypes from 'prop-types';

import Players from '../Players/Players';

import playersData from '../../helpers/data/playersData';
import teamData from '../../helpers/data/teamsData';

class SingleTeam extends React.Component {
    static propTypes = {
      teamId: PropTypes.string.isRequired,
      setSingleTeam: PropTypes.func.isRequired,
    }

    state = {
      team: {},
      players: [],
    }

    getPlayers = () => {
      const { teamId } = this.props;
      playersData.getPlayersByTeamId(teamId)
        .then((players) => this.setState({ players }))
        .catch((err) => console.error('get players sucks', err));
    }

    componentDidMount() {
      const { teamId } = this.props;

      teamData.getSingleTeam(teamId)
        .then((response) => this.setState({ team: response.data }))
        .catch((err) => console.error('get single team sucks', err));

      this.getPlayers();
    }

    deletePlayer = (playerId) => {
      playersData.deletePlayer(playerId)
        .then(() => {
          this.getPlayers();
        })
        .catch((err) => console.warn('delete players failed', err));
    }

    render() {
      const { team, players } = this.state;
      const { setSingleTeam } = this.props;

      const playerCards = players.map((player) => <Players key={player.id} player={player} deletePlayer={this.deletePlayer}/>);

      return (
            <div>
                <button className="btn btn-danger" onClick={() => { setSingleTeam(''); }}>X</button>
                <h2>{team.name}</h2>
                <div className="card-columns">
                  {playerCards}
                </div>
            </div>
      );
    }
}

export default SingleTeam;
