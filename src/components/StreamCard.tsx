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
    <div>
      <p>{stream.user_name}</p>
    </div>
  );
};

export default StreamCard;
