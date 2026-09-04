import type { channel } from '../api/twitch/twitchFollow';

interface StreamCardProps {
  stream: channel;
}

const StreamCards = ({ stream }: StreamCardProps) => {
  return (
    <div>
      <p>{stream.user_name}</p>
      <p>Thumbnail</p>
      <h2>Name</h2>
      <h3>Title</h3>
      <p>Viewer count</p>
      <p>Link</p>
    </div>
  );
};

export default StreamCards;
