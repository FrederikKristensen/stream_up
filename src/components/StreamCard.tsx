import { FaRegEye, FaTwitch } from 'react-icons/fa';
export interface stream {
  user_login: string;
  user_name: string;
  title: string;
  game_name: string;
  viewer_count: number;
  thumbnail_url: string;
  platform: 'twitch' | 'youtube';
}

interface StreamCardProps {
  stream: stream;
}

const StreamCard = ({ stream }: StreamCardProps) => {
  const thumbnailLink = stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180');

  return (
    <a
      href={`https://www.twitch.tv/${stream.user_login}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mx-3 my-1.5 bg-zinc-700 rounded-xl overflow-hidden border-2 border-gray-700">
        <div className="relative">
          <img
            src={thumbnailLink}
            alt={`Thumbnail of ${stream.user_name}'s stream`}
            className="w-full h-30 object-cover"
          />
        </div>
        <div className="pl-1.5 pb-0.5">
          <h1 className="truncate text-gray-50 font-bold pt-0.5">{stream.title}</h1>
          <h2 className="text-gray-200 font-semibold pb-1">
            {stream.user_name} - {stream.game_name}
          </h2>
          <div className="text-red-600 flex items-center gap-1">
            <FaRegEye />
            <p>{stream.viewer_count}</p>
          </div>
        </div>
        <div className="">{stream.platform === 'twitch' ? <FaTwitch /> : ''}</div>
      </div>
    </a>
  );
};

export default StreamCard;
