import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import player from "@/styles/videoP.module.css";

const CustomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleTimeUpdate = () => {
        // Atualiza o tempo atual do vídeo
        setCurrentTime(video.currentTime);
      };

      const handleLoadedMetadata = () => {
        // Atualiza a duração total quando os metadados estiverem disponíveis
        setDuration(video.duration);
      };

      // Escuta o evento de tempo atualizado e carregamento dos metadados
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const video = videoRef.current;
    if (video) {
      setMuted(!muted);
      video.muted = !muted;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const newTime = (parseFloat(e.target.value) / 100) * duration;
      video.currentTime = newTime;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className={player.video_player_container}>
      <div className={player.label_gravada}> &bull; Gravada</div>
      <video
        ref={videoRef}
        className={player.custom_video}
        width="100%"
        height="100%"
        muted={muted}
        src="/videos/aulas/amaao.mp4"
        preload="metadata" // Garante que os metadados do vídeo sejam carregados
      />
      {/* Barra de progresso sobre o vídeo */}
      <input
        type="range"
        className={player.progress_bar}
        min="0"
        max="100"
        value={duration ? (currentTime / duration) * 100 : 0} // Atualizando a barra de progresso
        onChange={handleProgressChange}
      />
      <div className={player.controls_and_time}>
        <div className={player.controls}>
          <button onClick={handlePlayPause} className={player.control_btn}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleMute} className={player.control_btn}>
            {muted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
        </div>
        <div className={player.time_display}>
          <span className={player.current_time}>{formatTime(currentTime)}</span>
          <span> / </span>
          {/* Garantindo que a duração total seja exibida */}
          <span className={player.total_time}>
            {duration ? formatTime(duration) : "0:00"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
