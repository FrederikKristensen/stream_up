import { FaRegEye } from 'react-icons/fa';
export interface channel {
  user_login: string;
  user_name: string;
  title: string;
  game_name: string;
  viewer_count: number;
  thumbnail_url: string;
}

interface StreamCardProps {
  stream: channel;
}

const StreamCard = ({ stream }: StreamCardProps) => {
  const thumbnailLink = stream.thumbnail_url.replace('{width}', '200').replace('{height}', '180');

  return (
    <a
      href={`https://www.twitch.tv/${stream.user_login}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="m-3 p-2 bg-zinc-700 rounded-xl">
        <img src={thumbnailLink} alt="Thumbnail of the stream" />
        <h1 className="truncate text-gray-50">{stream.title}</h1>
        <h2 className="text-gray-200">
          {stream.user_name} - {stream.game_name}
        </h2>
        <div className="text-red-600 flex items-center gap-1">
          <FaRegEye />
          <p>{stream.viewer_count}</p>
        </div>
      </div>
    </a>
  );
};

export default StreamCard;
