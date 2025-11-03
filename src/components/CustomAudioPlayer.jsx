import React, { useEffect, useRef, useState } from "react";
import "./CustomAudioPlayer.css";

export default function CustomAudioPlayer({
  src,
  onPlay,
  onPause,
  onEnded,
  className,
}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      onPlay?.();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPause?.();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [onPlay, onPause, onEnded]);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <>
      <audio ref={audioRef} src={src} />
      <div className={`custom-audio-player ${className || ""}`}>
        {/* Play/Pause Button */}
        <button
          className="audio-player-play-btn"
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Timeline & Progress */}
        <div className="audio-player-timeline-wrapper">
          <div
            className="audio-player-progress-container"
            ref={progressRef}
            onClick={handleProgressClick}
          >
            <div
              className="audio-player-progress-bar"
              style={{
                width: duration ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            />
            <div
              className="audio-player-progress-thumb"
              style={{
                left: duration ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            />
          </div>
        </div>

        {/* Current Time / Duration */}
        <div className="audio-player-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </>
  );
}
