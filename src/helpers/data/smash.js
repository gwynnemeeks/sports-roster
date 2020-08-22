import teamData from './teamsData';
import playerData from './playersData';

const removeTeamAndPlayers = (teamId) => new Promise((resolve, reject) => {
  teamData.deleteTeam(teamId)
    .then(() => {
      playerData.getPlayersByTeamId(teamId)
        .then((players) => {
          players.forEach((player) => {
            playerData.deletePlayer(player.id);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { removeTeamAndPlayers };
