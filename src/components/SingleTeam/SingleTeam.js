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

    componentDidMount() {
      const { teamId } = this.props;

      teamData.getSingleTeam(teamId)
        .then((response) => this.setState({ team: response.data }))
        .catch((err) => console.error('get single team sucks', err));

      playersData.getPlayersByTeamId(teamId)
        .then((players) => this.setState({ players }))
        .catch((err) => console.error('get players sucks', err));
    }

    render() {
      const { team, players } = this.state;
      const { setSingleTeam } = this.props;

      const playerCards = players.map((player) => <Players key={player.id} player={player}/>);
      console.warn(playerCards);

      return (
            <div>
                <h4>{team.name}</h4>
                <button className="btn btn-danger" onClick={() => { setSingleTeam(''); }}>X</button>
                <div className="card-columns">
                  {playerCards}
                </div>
            </div>
      );
    }
}

export default SingleTeam;
