import React from 'react';
import PropTypes from 'prop-types';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
    static propTypes = {
      player: playerShape.playerShape,
      deletePlayer: PropTypes.func.isRequired,
    }

    deletePlayerEvent = (e) => {
      e.preventDefault();
      const { player, deletePlayer } = this.props;
      deletePlayer(player.id);
    }

    render() {
      const { player } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h3>{player.name}</h3></div>
        <div className="card-body">
          <p className="card-title"><i className={player.icon}></i></p>
          <div className="card-text"><h4>{player.position}</h4></div>
          <button className="btn btn-danger" onClick={this.deletePlayerEvent}><i className="fas fa-user-slash fa-lg"></i></button>
          </div>
          </div>
      );
    }
}

export default Player;
