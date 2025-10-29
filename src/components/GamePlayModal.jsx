import React, { useState } from "react";
import "./GamePlayModal.css";
import leafHat from "../assets/leaf-hat.png";

function GamePlayModal({ isOpen, onClose, currentTeamName, onSubmit }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  const handleAccept = () => {
    // normalize input: extract first numeric segment (e.g., " 09 " -> "09")
    const normalized = (value || "").toString().trim();
    const digitsMatch = normalized.match(/\d+/);
    const numeric = digitsMatch ? digitsMatch[0] : normalized;
    if (onSubmit) onSubmit(numeric);
    // do not call onClose here; parent will manage modal lifecycle after handling submit
  };

  return (
    <div className={`gameplay-overlay ${isOpen ? "open" : ""}`}>
      <div className="gameplay-sheet">
        <h2 className="gameplay-title">Nhập số trên mảnh ghép</h2>

        <div className={`gameplay-input-pill ${focused ? "focused" : ""}`}>
          <input
            className="gameplay-number-input"
            type="text"
            placeholder="01"
            aria-label="Nhập số"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </div>

        <button className="gameplay-accept" onClick={handleAccept}>
          Nhận thử thách
        </button>
        <button
          className="gameplay-skip"
          onClick={() => {
            if (onClose) onClose();
          }}
        >
          Bỏ qua
        </button>

        <div className="gameplay-leaf">
          <img src={leafHat} alt="leaf hat" />
        </div>

        <div className="gameplay-leaf-caption">Ô nón lá hy vọng</div>
      </div>
    </div>
  );
}

export default GamePlayModal;
