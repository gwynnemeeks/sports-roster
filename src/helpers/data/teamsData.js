import axios from 'axios';

import utils from '../utils';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTeamsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/teams.json?orderBy="uid"&equalTo="${uid}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const getSingleTeam = (teamId) => axios.get(`${baseUrl}/teams/${teamId}.json`);

const deleteTeam = (teamId) => axios.delete(`${baseUrl}/teams/${teamId}.json`);

const createTeam = (newTeam) => axios.post(`${baseUrl}/teams/.json`, newTeam);

export default {
  getTeamsByUid,
  getSingleTeam,
  deleteTeam,
  createTeam,
};
