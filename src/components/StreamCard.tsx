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
  return (
    <div className="m-3 p-2 bg-gray-500 rounded-xl">
      <h1 className="text-gray-100">{stream.title}</h1>
      <h2 className="text-gray-200">{stream.user_name}</h2>
      <h3 className="text-gray-400">{stream.game_name}</h3>
      <p className="text-red-600">{stream.viewer_count}</p>
    </div>
  );
};

export default StreamCard;
