import React, { useState } from "react";
import { GameProvider, useGame } from "./GameProvider";
import GamePlayModal from "./GamePlayModal";
import * as Modals from "./modals";
import { getReadAndChooseQuestion } from "./modals/readAndChooseQuestions";
import { readAndChooseWithImageQuestions } from "./modals/readAndChooseWithImageQuestions";
import { watchVideoAndChooseQuestions } from "./modals/watchVideoAndChooseQuestions";
import { listenToSoundQuestions } from "./modals/listenToSoundQuestions";

function DemoInner() {
  const { teamScores, currentTeam, answerQuestion, reset } = useGame();
  const [playOpen, setPlayOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [activeModalKey, setActiveModalKey] = useState(null);
  const [activeQuestionData, setActiveQuestionData] = useState(null);

  // mapping 1..9 to modal keys
  const mapping = [
    "ReadAndChooseModal",
    "ReadAndChooseAnswerWithImageModal",
    "PickRightAnswerWithPicturesModal",
    "WatchVideoAndChooseRightAnswerModal",
    "ListenToSoundPickRightAnswerModal",
    "MemorizeInLimitedTimeAndChooseAnswerModal",
    "TypeInAnswerModal",
    "DoTheChallengeModal",
    "MatchPairsModal",
  ];

  function openPlay() {
    setPlayOpen(true);
  }

  function handleSubmitNumber(val) {
    // try convert to number and map
    const n = parseInt(val, 10);

    // first check if this number corresponds to a WatchVideoAndChooseRightAnswerModal question
    const videoQ = watchVideoAndChooseQuestions[n];
    if (videoQ) {
      setActiveModalKey("WatchVideoAndChooseRightAnswerModal");
      setActiveQuestionData(videoQ);
      setPlayOpen(false);
      setQuestionOpen(true);
      return;
    }

    // then check if this number corresponds to a ListenToSoundPickRightAnswerModal question
    const soundQ = listenToSoundQuestions[n];
    if (soundQ) {
      setActiveModalKey("ListenToSoundPickRightAnswerModal");
      setActiveQuestionData(soundQ);
      setPlayOpen(false);
      setQuestionOpen(true);
      return;
    }

    // then check if this number corresponds to a ReadAndChooseAnswerWithImageModal question
    const imageQ = readAndChooseWithImageQuestions[n];
    if (imageQ) {
      setActiveModalKey("ReadAndChooseAnswerWithImageModal");
      setActiveQuestionData(imageQ);
      setPlayOpen(false);
      setQuestionOpen(true);
      return;
    }

    // then check if this number corresponds to a ReadAndChoose question
    const readQ = getReadAndChooseQuestion(n);
    if (readQ) {
      setActiveModalKey("ReadAndChooseModal");
      setActiveQuestionData(readQ);
      setPlayOpen(false);
      setQuestionOpen(true);
      return;
    }

    const idx = isNaN(n) ? 0 : Math.max(0, Math.min(8, n - 1));
    const key = mapping[idx];
    setActiveModalKey(key);
    setActiveQuestionData(null);
    setPlayOpen(false);
    setQuestionOpen(true);
  }

  function handleQuestionResult(result) {
    // update score via context
    answerQuestion(result);
    setQuestionOpen(false);
    setActiveQuestionData(null);
    setActiveModalKey(null);
    // reopen gameplay modal for other team
    setTimeout(() => setPlayOpen(true), 150);
  }

  const ActiveModal = activeModalKey ? Modals[activeModalKey] : null;

  return (
    <div style={{ padding: 12 }}>
      <h3>Game demo</h3>
      <div style={{ marginBottom: 8 }}>
        <strong>Current team:</strong> {currentTeam}
      </div>
      <div style={{ marginBottom: 8 }}>
        <strong>Scores:</strong> Team1 {teamScores.team1} — Team2{" "}
        {teamScores.team2}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={openPlay} className="start-button">
          Start Gameplay Modal
        </button>
        <button onClick={reset} className="start-button">
          Reset Game
        </button>
      </div>

      <GamePlayModal
        isOpen={playOpen}
        onClose={() => setPlayOpen(false)}
        onSubmit={handleSubmitNumber}
      />

      {ActiveModal && (
        <ActiveModal
          isOpen={questionOpen}
          onClose={() => setQuestionOpen(false)}
          onResult={handleQuestionResult}
          questionData={activeQuestionData}
        />
      )}
    </div>
  );
}

export default function GameDemo() {
  return (
    <GameProvider>
      <DemoInner />
    </GameProvider>
  );
}
