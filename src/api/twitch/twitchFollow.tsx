import type { stream } from '../../components/StreamCard';

const Twitch_Client_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;
interface followedStreams {
  data: stream[];
}

async function getTwitchFollow(accessToken: string, userId: string): Promise<stream[]> {
  const response = await fetch(`https://api.twitch.tv/helix/streams/followed?user_id=${userId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': Twitch_Client_ID,
    },
  });

  if (!response.ok) {
    throw new Error(`Twitch API error: ${response.status} ${response.statusText}`);
  }

  const result: followedStreams = await response.json();
  return result.data.map((stream) => ({
    ...stream,
    platform: 'twitch' as const,
  }));
}

export default getTwitchFollow;
