import { useState, useEffect } from "react";
import "./BottomSheet.css";

function BottomSheet({ isOpen, onClose, onStartGame, onTeamChange }) {
  const [selectedTeam, setSelectedTeam] = useState("team1");
  const [teamNames, setTeamNames] = useState({
    team1: "",
    team2: "",
  });
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleTeamSelect = (team) => {
    setSelectedTeam(team);
    onTeamChange && onTeamChange(team);
  };

  useEffect(() => {
    // inform parent of currently selected team when opened
    if (isOpen) {
      onTeamChange && onTeamChange(selectedTeam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleTeamNameChange = (e) => {
    setTeamNames({
      ...teamNames,
      [selectedTeam]: e.target.value,
    });
  };

  const handleStartGame = () => {
    // start fade-out, then notify parent to open the gameplay modal
    setIsFadingOut(true);
    // duration should match CSS transition (350ms)
    setTimeout(() => {
      // first close the bottom sheet
      onClose && onClose();
      // then inform parent to open the game modal with current data
      onStartGame && onStartGame({ teamNames, currentTeam: selectedTeam });
      // reset fading state (in case component remains mounted briefly)
      setIsFadingOut(false);
    }, 350);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("bottom-sheet-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`bottom-sheet-overlay ${isOpen ? "open" : ""} ${
        isFadingOut ? "fading-out" : ""
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bottom-sheet ${isOpen ? "open" : ""} ${
          isFadingOut ? "fading-out" : ""
        }`}
      >
        <div className="bottom-sheet-content">
          <h2 className="bottom-sheet-title">nhập tên đội chơi</h2>

          <div className="team-inputs-container">
            <div className="team-input-wrapper">
              <button
                className={`team-button ${
                  selectedTeam === "team1" ? "active" : ""
                }`}
                onClick={() => handleTeamSelect("team1")}
                type="button"
              >
                <span className="team-label">ĐỘI 1</span>
                {selectedTeam === "team1" ? (
                  <input
                    type="text"
                    className="team-name-input"
                    value={teamNames.team1}
                    onChange={handleTeamNameChange}
                    placeholder="Lạc con"
                    autoFocus
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span className="team-name-display team-name-greyed">
                    {teamNames.team1 || "Lạc con"}
                  </span>
                )}
              </button>
            </div>

            <div className="team-input-wrapper">
              <button
                className={`team-button ${
                  selectedTeam === "team2" ? "active" : ""
                }`}
                onClick={() => handleTeamSelect("team2")}
                type="button"
              >
                <span className="team-label">đội 2</span>
                {selectedTeam === "team2" ? (
                  <input
                    type="text"
                    className="team-name-input"
                    value={teamNames.team2}
                    onChange={handleTeamNameChange}
                    placeholder="Nhập tên đội"
                    autoFocus
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <span className="team-name-display team-name-greyed">
                    {teamNames.team2 || "Nhập tên đội"}
                  </span>
                )}
              </button>
            </div>
          </div>

          <button className="start-game-button" onClick={handleStartGame}>
            Vào chơi
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
