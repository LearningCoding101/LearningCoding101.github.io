import React, { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [teamScores, setTeamScores] = useState({ team1: 0, team2: 0 });
  const [currentTeam, setCurrentTeam] = useState("team1");

  const clamp = (n) => Math.max(0, n);

  function switchTurn() {
    setCurrentTeam((t) => (t === "team1" ? "team2" : "team1"));
  }

  function answerQuestion(result) {
    // update score for the current team, then explicitly set the next team
    setTeamScores((prev) => {
      const before = prev[currentTeam] || 0;
      let after = before;
      if (result === "success") after = before + 1;
      else if (result === "failure") after = before - 3;
      after = clamp(after);
      return { ...prev, [currentTeam]: after };
    });

    // explicitly compute and set next team so consumers see the change
    setCurrentTeam((t) => {
      const next = t === "team1" ? "team2" : "team1";
      // console debug to help diagnose UI issues
      try {
        // eslint-disable-next-line no-console
        console.log("GameProvider: switching turn", {
          from: t,
          to: next,
          result,
        });
      } catch (e) {}
      return next;
    });
  }

  function setScore(team, value) {
    setTeamScores((prev) => ({ ...prev, [team]: clamp(value) }));
  }

  function reset() {
    setTeamScores({ team1: 0, team2: 0 });
    setCurrentTeam("team1");
  }

  return (
    <GameContext.Provider
      value={{
        teamScores,
        currentTeam,
        answerQuestion,
        switchTurn,
        setScore,
        reset,
        setCurrentTeam,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}

export default GameProvider;
