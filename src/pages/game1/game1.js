const playerNameInput = document.getElementById('playerName');
const startGameBtn = document.getElementById('startGame');
const leaderboardBtn = document.getElementById('leaderboard');
const countinueBtn = document.getElementById('countinue');
const overlay = document.getElementById('leaderboardOverlay');
const closeBtn = document.querySelector('.close-btn');

// Simplified checkSavedGame function
function checkSavedGame() {
   const savedGame = localStorage.getItem('savedGame');
   const currentPlayerName = document.getElementById('playerName').value.trim();
   const continueBtn = document.getElementById('countinue');

   if (savedGame && currentPlayerName) {
      const gameData = JSON.parse(savedGame);
      continueBtn.disabled = !(gameData.playerName === currentPlayerName);
   } else {
      continueBtn.disabled = true;
   }
}

// Update the playerNameInput event listener
playerNameInput.addEventListener('input', function () {
   const isPlayerNameEntered = !!this.value.trim();
   startGameBtn.disabled = !isPlayerNameEntered;
   checkSavedGame();
});

startGameBtn.addEventListener('click', function () {
   const playerName = playerNameInput.value.trim();
   if (playerName) {
      localStorage.setItem('playerName', playerName);
      window.location.href = 'newGame.html';
   }
});

// Update the continue button click handler
countinueBtn.addEventListener('click', function () {
   const playerName = playerNameInput.value.trim();
   const savedGame = JSON.parse(localStorage.getItem('savedGame'));
   if (savedGame && savedGame.playerName === playerName) {
      localStorage.setItem('playerName', playerName);
      window.location.href = 'newGame.html?continue=true';
   }
});

// Modify the loadLeaderboard function
function loadLeaderboard() {
   const leaderboardData = [];
   const savedGames = localStorage.getItem('completedGames');
   const lastScore = localStorage.getItem('lastScore');
   const currentPlayer = localStorage.getItem('playerName');

   if (savedGames) {
      const games = JSON.parse(savedGames);
      Object.entries(games).forEach(([playerName, gameData]) => {
         if (gameData.completedLevels === 3) {
            leaderboardData.push({
               name: playerName,
               score: gameData.totalScore,
               isNew: playerName === currentPlayer && gameData.totalScore === Number(lastScore)
            });
         }
      });

      // Sort by score in descending order
      leaderboardData.sort((a, b) => b.score - a.score);
   }

   // Update the leaderboard HTML
   const leaderboardList = document.querySelector('.leaderboard-list');
   leaderboardList.innerHTML = '';

   if (leaderboardData.length === 0) {
      leaderboardList.innerHTML = '<li class="leaderboard-item"><span>Chưa có người chơi hoàn thành game</span></li>';
   } else {
      leaderboardData.slice(0, 10).forEach((player, index) => {
         const li = document.createElement('li');
         li.className = 'leaderboard-item';
         if (player.isNew) {
            li.classList.add('highlight');
         }
         const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : '';
         li.innerHTML = `
                        <span>${medal} ${index + 1}. ${player.name}</span>
                        <span>${player.score} điểm</span>
                    `;
         leaderboardList.appendChild(li);
      });
   }

   // Check URL parameters to show leaderboard
   if (window.location.search.includes('showLeaderboard=true')) {
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      localStorage.removeItem('lastScore'); // Clear the last score
   }
}

// Update the leaderboard button click handler
leaderboardBtn.addEventListener('click', function () {
   loadLeaderboard(); // Load the latest data
   overlay.style.display = 'block';
   document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function () {
   overlay.style.display = 'none';
   document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', function (e) {
   if (e.target === overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
   }
});

function saveGameState(state) {
   const playerName = localStorage.getItem('playerName');
   if (playerName) {
      const gameState = {
         playerName,
         state,
      };
      localStorage.setItem('gameState', JSON.stringify(gameState));
   }
}

// Update these functions

// Check for saved game when page loads
window.onload = function () {
   // Try to restore last used player name
   const lastPlayerName = localStorage.getItem('playerName');
   if (lastPlayerName) {
      playerNameInput.value = lastPlayerName;
      checkSavedGame();
      startGameBtn.disabled = false;
   }

   // Check URL parameters for leaderboard
   if (window.location.search.includes('showLeaderboard=true')) {
      loadLeaderboard();
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
   }
};

playerNameInput.addEventListener('input', function () {
   const playerName = this.value.trim();
   startGameBtn.disabled = !playerName;
   if (playerName) {
      checkSavedGame();
   } else {
      countinueBtn.disabled = true;
   }
});