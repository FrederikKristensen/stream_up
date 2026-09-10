import type { stream } from '../../components/StreamCard';

const Twitch_Client_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;
interface followedStreams {
  data: stream[];
}

interface twitchChannel {
  id: string;
  profile_image_url: string;
}

interface followedUsers {
  data: twitchChannel[];
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
  const streams = result.data;

  // checks if there is any followed to avoid api calling
  if (streams.length === 0) {
    return streams;
  }

  const idParam = new URLSearchParams();
  streams.forEach((s) => idParam.append('id', s.user_id));

  // get the data on the followed streams by the user id
  const userResponse = await fetch(`https://api.twitch.tv/helix/users?${idParam.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': Twitch_Client_ID,
    },
  });

  const userResult: followedUsers = await userResponse.json();

  return streams.map((stream) => {
    const user = userResult.data.find((u) => u.id === stream.user_id);
    return {
      ...stream,
      platform: 'twitch' as const,
      profile_image_url: user?.profile_image_url ?? '',
    };
  });
}

export default getTwitchFollow;
