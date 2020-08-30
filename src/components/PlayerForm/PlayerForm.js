import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
    static propTypes = {
      createPlayer: PropTypes.func.isRequired,
    }

    state = {
      icon: '',
      name: '',
      position: '',
      teamName: '',
      teamId: '',
    }

    changeIconEvent = (e) => {
      e.preventDefault();
      this.setState({ icon: e.target.value });
    }

    changeNameEvent = (e) => {
      e.preventDefault();
      this.setState({ name: e.target.value });
    }

    changePositionEvent = (e) => {
      e.preventDefault();
      this.setState({ position: e.target.value });
    }

    changeTeamNameEvent = (e) => {
      e.preventDefault();
      this.setState({ teamName: e.target.value });
    }

    savePlayerEvent = (e) => {
      e.preventDefault();
      const {
        icon,
        name,
        position,
        teamName,
      } = this.state;
      const { createPlayer, teamId } = this.props;

      const newPlayer = {
        icon,
        name,
        position,
        teamName,
        teamId,
        uid: authData.getUid(),
      };
      createPlayer(newPlayer);
    }

    render() {
      return (
            <form className="col-6 offset-3">
            <div className="form-group">
            <label htmlFor="icon">Icon</label>
            <input
            type="text"
            className="form-control"
            id="icon"
            placeholder="Enter Font Awesome Icon here and add fa-3x"
            onChange={this.changeIconEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Player Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Player Name"
            onChange={this.changeNameEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Player Position</label>
          <input
            type="text"
            className="form-control"
            id="position"
            placeholder="Player Position"
            onChange={this.changePositionEvent}
          />
        </div>
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            className="form-control"
            id="teamName"
            placeholder="Team Name"
            onChange={this.changeTeamNameEvent}
          />
        </div>
        <button className="btn btn-dark" onClick={this.savePlayerEvent}><i className="fas fa-save"></i></button>
        </form>
      );
    }
}

export default PlayerForm;
