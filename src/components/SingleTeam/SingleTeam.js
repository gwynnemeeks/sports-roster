import React from 'react';
import PropTypes from 'prop-types';

import teamData from '../../helpers/data/teamsData';

class SingleTeam extends React.Component {
    static propTypes = {
      teamId: PropTypes.string.isRequired,
      setSingleTeam: PropTypes.func.isRequired,
    }

    state = {
      team: {},
    }

    componentDidMount() {
      const { teamId } = this.props;
      teamData.getSingleTeam(teamId)
        .then((response) => this.setState({ team: response.data }))
        .catch((err) => console.error('get single team sucks', err));
    }

    render() {
      const { team } = this.state;
      const { setSingleTeam } = this.props;

      return (
            <div>
                <h4>{team.name}</h4>
                <button className="btn btn-danger" onClick={() => { setSingleTeam(''); }}>X</button>
            </div>
      );
    }
}

export default SingleTeam;
