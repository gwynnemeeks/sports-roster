import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  teamId: PropTypes.string.isRequired,
});

export default { playerShape };
