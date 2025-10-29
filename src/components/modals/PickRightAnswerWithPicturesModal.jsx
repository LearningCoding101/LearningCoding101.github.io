import React from "react";

export default function PickRightAnswerWithPicturesModal({
  isOpen,
  onClose,
  onResult,
}) {
  if (!isOpen) return null;
  return (
    <div className="gameplay-overlay open">
      <div className="gameplay-sheet">
        <h2 className="gameplay-title">
          Pick Right Answer With Pictures (placeholder)
        </h2>
        <p style={{ textAlign: "center" }}>Placeholder picture choices.</p>

        <button
          onClick={() => onResult && onResult("success")}
          className="gameplay-accept"
        >
          Mark Success
        </button>
        <button
          onClick={() => onResult && onResult("failure")}
          className="gameplay-skip"
        >
          Mark Failure
        </button>

        <button onClick={onClose} style={{ marginTop: 8 }}>
          Close
        </button>
      </div>
    </div>
  );
}
