import PropTypes from 'prop-types';

const teamShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  players: PropTypes.string.isRequired,
  coach: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { teamShape };
