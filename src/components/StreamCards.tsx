import StreamCard, { type channel } from './StreamCard';

interface StreamcardsProps {
  streams: channel[];
}

const StreamCards = ({ streams }: StreamcardsProps) => {
  return (
    <div>
      {streams.map((channel) => (
        <StreamCard key={channel.user_name} stream={channel} />
      ))}
    </div>
  );
};

export default StreamCards;
