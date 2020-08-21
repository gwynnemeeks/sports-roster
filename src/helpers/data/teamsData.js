import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTeamsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/teams.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getTeamsByUid };
