import { FaRegEye, FaTwitch } from 'react-icons/fa';
import browser from 'webextension-polyfill';

export interface stream {
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  game_name: string;
  viewer_count: number;
  thumbnail_url: string;
  platform: 'twitch' | 'youtube';
  profile_image_url: string;
}

interface StreamCardProps {
  stream: stream;
}

// Middle mouse click event handle
const openAuxClick = (url: string, background: boolean) => {
  browser.tabs.create({ url, active: !background });
};

const StreamCard = ({ stream }: StreamCardProps) => {
  const thumbnailLink = stream.thumbnail_url.replace('{width}', '320').replace('{height}', '180');

  return (
    <a
      href={`https://www.twitch.tv/${stream.user_login}`}
      onAuxClick={(e) => {
        e.preventDefault();
        openAuxClick(`https://www.twitch.tv/${stream.user_login}`, true);
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative mx-3 my-1.5 bg-zinc-700 rounded-xl overflow-hidden border-2 border-gray-700">
        <div className="relative">
          <img
            src={thumbnailLink}
            alt={`Thumbnail of ${stream.user_name}'s stream`}
            className="w-full h-30 object-cover"
          />
        </div>
        <div className="pl-1.5 pb-0.5">
          <h1 className="truncate text-gray-50 font-bold pt-1">{stream.title}</h1>
          <div className="flex items-center pb-0.8">
            <div className="flex items-center gap-1.5">
              <img
                src={stream.profile_image_url}
                alt={`Profile picture of ${stream.user_name}`}
                className="h-7 rounded-full"
              />
              <h2 className=" text-gray-200 font-semibold">
                {stream.user_name} - {stream.game_name}
              </h2>
            </div>
            <div className="absolute right-1 text-red-600 flex items-center gap-1 font-semibold">
              <p>{stream.viewer_count}</p>
              <FaRegEye />
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 p-1 bg-purple-500 rounded-sm">
          {stream.platform === 'twitch' ? <FaTwitch className="size-3" /> : ''}
        </div>
      </div>
    </a>
  );
};

export default StreamCard;
