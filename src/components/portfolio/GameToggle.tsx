import { useState } from "react";
import RobotGame from "./RobotGame";

export default function GameToggle() {
  const [gameActive, setGameActive] = useState(false);
  const [showGameInfo, setShowGameInfo] = useState(false);

  return (
    <>
      <div className="game-toggle-fixed">
        <div className="game-toggle-row">
          <button
            className={`game-toggle-btn${gameActive ? " game-toggle-btn--on" : ""}`}
            onClick={() => setGameActive((a) => !a)}
            title={gameActive ? "Disable game mode" : "Enable game mode"}
          >
            <span className="game-toggle-dot" />
            game mode
          </button>
          {gameActive && (
            <button
              className="game-info-btn"
              onMouseEnter={() => setShowGameInfo(true)}
              onMouseLeave={() => setShowGameInfo(false)}
              aria-label="How to play"
            >
              i
            </button>
          )}
        </div>
        {showGameInfo && gameActive && (
          <div className="robot-game-info">
            <div className="robot-game-info-title">how to play</div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">← →</span>
              <span>move</span>
            </div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">space</span>
              <span>jump</span>
            </div>
            <div className="robot-game-info-row">
              <span className="robot-game-key">scroll</span>
              <span>explore</span>
            </div>
            <div className="robot-game-info-goal">collect your scattered brain cells</div>
          </div>
        )}
      </div>
      <RobotGame active={gameActive} />
    </>
  );
}
