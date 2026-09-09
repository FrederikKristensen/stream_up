import StreamCard, { type stream } from './StreamCard';

interface StreamcardsProps {
  streams: stream[];
}

const StreamCards = ({ streams }: StreamcardsProps) => {
  return (
    <div>
      {streams.map((stream) => (
        <StreamCard key={stream.user_name} stream={stream} />
      ))}
    </div>
  );
};

export default StreamCards;
