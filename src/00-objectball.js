const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise","Purple"],
        players: {
            "Jeff Adrien": {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
            "Bismak Biyombo": {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
           "DeSagna Diop": {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
            "Ben Gordon": {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
            "Brendan Haywood": {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
    },
  };
};

//console.log(gameObject())

function numPointsScored(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (playerKey === playerName) {
        return game[teamKey].players[playerKey].points;
      }
    }
  }
}

function shoeSize(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (playerKey === playerName) {
        return game[teamKey].players[playerKey].shoe;
      }
    }
  }
}

function teamColors(team) {
  const game = gameObject();

  for (let teamKey in game) {
    if (game[teamKey].teamName === team) {
      return game[teamKey].colors;
    }
  }
}

function teamNames() {
  const game = gameObject();
  const names = []

  for (let teamKey in game) {
    names.push(game[teamKey].teamName)
  }

  return names;
}

function playerNumbers(team) {
  const game = gameObject();
  const playerNumbers = [];

  for (let teamKey in game) {
    if (game[teamKey].teamName === team) {
      for (playerKeys in game[teamKey].players) {
        playerNumbers.push(game[teamKey].players[playerKeys].number)
      }
    }
  }

  return playerNumbers;
}

function playerStats(playerName) {
  const game = gameObject();

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (playerKey === playerName) {
        //console.log(game[teamKey].players[playerKey])
        return game[teamKey].players[playerKey];
      }
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let bigfootRebounds = {};
  let shoeSizeTracker = 0;

  //find largest shoe size
  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (game[teamKey].players[playerKey].shoe > shoeSizeTracker) {
        shoeSizeTracker = game[teamKey].players[playerKey].shoe;
        bigfootRebounds = game[teamKey].players[playerKey].rebounds;
      }
    }
  }

  return bigfootRebounds;
}

function mostPointsScored() {
  const game = gameObject();
  let pointsTracker = 0;
  let hiScorer = "";

  for (let teamKey in game) {
    for (let playerKey in game[teamKey].players) {
      if (game[teamKey].players[playerKey].points > pointsTracker) {        
        pointsTracker = game[teamKey].players[playerKey].points;
        hiScorer = playerKey;
      }
    }
  }

  return hiScorer;
}

function winningTeam() {
  const game = gameObject();
  let homeScore = 0;
  let awayScore = 0;

  //home score
  for (let playerKey in game.home.players) {
    homeScore += game.home.players[playerKey].points;
  }

  //away score
  for (let playerKey in game.away.players) {
    awayScore += game.away.players[playerKey].points;
  }

  return homeScore > awayScore ? game.home.teamName : game.away.teamName;
}

function playerWithLongestName() {
  const game = gameObject();
  let longestNameTracker = 0;
  let longestName = "";

  for (let gameKey in game) {
    for (let playerKey in game[gameKey].players) {
      if (playerKey.length > longestNameTracker) {
        longestNameTracker = playerKey.length;
        longestName = playerKey;
      }
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let stealTracker = 0;
  let stealKing = "";

  for (let gameKey in game) {
    for (let playerKey in game[gameKey].players) {
      if (game[gameKey].players[playerKey].steals > stealTracker) {
        stealTracker = game[gameKey].players[playerKey].steals;
        stealKing = playerKey;
      }
    }
  }

  return stealKing === longestName;
}