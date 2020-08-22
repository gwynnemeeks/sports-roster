import React from 'react';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
    static propTypes = {
      player: playerShape.playerShape,
    }

    render() {
      const { player } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h5>{player.name}</h5></div>
        <div className="card-body">
          <p className="card-title"><i className={player.icon}></i></p>
          <p className="card-text">{player.position}</p>
          </div>
          </div>
      );
    }
}

export default Player;
