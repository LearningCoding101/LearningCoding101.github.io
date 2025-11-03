// Example usage of ReadAndChooseAnswerWithImageModal
// This file demonstrates how to integrate the modal into your game flow

import React, { useState } from "react";
import { ReadAndChooseAnswerWithImageModal } from "../modals";
import { readAndChooseWithImageQuestions } from "../modals/readAndChooseWithImageQuestions";

export default function GameExample() {
  const [currentQuestionId, setCurrentQuestionId] = useState(24);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuestionResult = (result) => {
    if (result === "success") {
      setScore((prev) => prev + 1);
      console.log("✅ Correct!");
    } else {
      console.log("❌ Wrong!");
    }

    // Close modal after result
    setTimeout(() => {
      setIsModalOpen(false);
      // Move to next question
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    const questionIds = [24, 25, 28, 29];
    const currentIndex = questionIds.indexOf(currentQuestionId);
    const nextIndex = (currentIndex + 1) % questionIds.length;
    setCurrentQuestionId(questionIds[nextIndex]);
  };

  const currentQuestion = readAndChooseWithImageQuestions[currentQuestionId];

  return (
    <div className="game-container">
      <h1>Trò chơi Văn hóa Việt Nam</h1>
      <p>Điểm: {score}</p>

      <button onClick={() => setIsModalOpen(true)} className="start-btn">
        Bắt đầu câu hỏi {currentQuestionId}
      </button>

      <ReadAndChooseAnswerWithImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onResult={handleQuestionResult}
        questionData={currentQuestion}
      />

      <div className="question-info">
        <h2>Câu hỏi hiện tại: {currentQuestion?.title}</h2>
        <p>ID: {currentQuestion?.id}</p>
      </div>
    </div>
  );
}

// Usage in your game provider or main game component:
/*
  Import this example and integrate it with your existing game logic:
  
  1. Import the modal and questions data
  2. Manage question state (which question is current)
  3. Handle results and track score
  4. Move to next question when result is received
  
  The modal will:
  - Display the image
  - Show choices
  - Handle keyboard navigation
  - Call onResult with "success" or "failure"
*/
