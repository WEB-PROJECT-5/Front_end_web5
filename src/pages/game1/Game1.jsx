import React from 'react';
import "./game1.css"

const Game1 = () => {
   return (
      <div>
         <div className="container">
            <h1>♻️ Recycle Sokoban</h1>

            <div className="input-container">
               <label for="playerName">Tên người chơi</label>
               <input type="text" id="playerName" placeholder="Nhập tên của bạn" required />
            </div>

            <button className="btn btn-primary" id="startGame" disabled>Bắt đầu chơi</button>
            <button className="btn btn-primary" id="countinue" disabled>Tiếp tục game</button>
            <button className="btn btn-secondary" id="leaderboard">Bảng xếp hạng</button>
         </div>

         <div className="overlay" id="leaderboardOverlay">
            <div className="leaderboard">
               <button className="close-btn">&times;</button>
               <h2>Bảng Xếp Hạng</h2>
               <ul className="leaderboard-list">
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Game1