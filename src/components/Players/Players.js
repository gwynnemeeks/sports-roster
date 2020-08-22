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
        <div className="card-header"><h3>{player.name}</h3></div>
        <div className="card-body">
          <p className="card-title"><i className={player.icon}></i></p>
          <div className="card-text"><h4>{player.position}</h4></div>
          </div>
          </div>
      );
    }
}

export default Player;
