import { useState, useRef, useEffect } from "react";
import "./VideoPlayer.css";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";

function VideoPlayer({ videos }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const nextVideo = () => {
    setCurrentVideo((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  const previousVideo = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolume = (e) => {
    const value = Number(e.target.value);

    setVolume(value);

    if (videoRef.current) {
      videoRef.current.volume = value;
      videoRef.current.muted = value === 0;
    }

    setIsMuted(value === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const muted = !videoRef.current.muted;

    videoRef.current.muted = muted;
    setIsMuted(muted);
  };

  const toggleFullscreen = () => {
  if (!containerRef.current) return;

  if (!document.fullscreenElement) {
    containerRef.current.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.load();

    videoRef.current.volume = volume;
    videoRef.current.muted = isMuted;

    videoRef.current.pause();
setIsPlaying(false);
  }, [currentVideo]);

  return (
    <div className="video-player">
      <div
        className="video-container"
        ref={containerRef}
      >
        <video
          ref={videoRef}
          className="video-element"
          loop
          playsInline
          muted={isMuted}
        >
          <source
            src={videos[currentVideo]}
            type="video/mp4"
          />
        </video>

        <div className="controls">

          <button onClick={previousVideo}>
            <SkipBack size={30} />
          </button>

          <button onClick={togglePlay}>
            {isPlaying ? (
              <Pause size={34} />
            ) : (
              <Play size={34} />
            )}
          </button>

          <button onClick={nextVideo}>
            <SkipForward size={30} />
          </button>

          <div className="volume-control">
            <button onClick={toggleMute}>
              {isMuted ? (
                <VolumeX size={28} />
              ) : (
                <Volume2 size={28} />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
            />
          </div>

          <button onClick={toggleFullscreen}>
            <Maximize2 size={28} />
          </button>

        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;