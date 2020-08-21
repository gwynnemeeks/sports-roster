import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayersByTeamId = (teamId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players.json?orderBy="teamId"&equalTo="${teamId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getPlayersByTeamId };
