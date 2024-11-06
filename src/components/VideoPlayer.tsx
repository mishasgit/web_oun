interface VideoPlayerProps {
  src: string;
  isYouTube?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, isYouTube = true }) => {
  // Функция для извлечения ID видео из YouTube ссылки
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId = '';
    
    // Обрабатываем разные форматы YouTube ссылок
    if (url.includes('youtube.com/watch')) {
      videoId = url.split('v=')[1];
    } else if (url.includes('youtu.be')) {
      videoId = url.split('youtu.be/')[1];
    }
    
    // Убираем дополнительные параметры после ID видео
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden">
      {isYouTube ? (
        <iframe
          className="w-full h-full"
          src={getYouTubeEmbedUrl(src)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-white">
          Video
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;