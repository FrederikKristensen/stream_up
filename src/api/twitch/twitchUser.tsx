export const Twitch_Client_ID = '7vg5ggl5wh7qmzudpa4z4s8tdq4pby';

interface TwitchUser {
  id: string;
  display_name: string;
  profile_image_url: string;
}

interface GetUser {
  data: TwitchUser[];
}

async function getUsersId(accessToken: string): Promise<TwitchUser> {
  const response = await fetch(`https://api.twitch.tv/helix/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Client-Id': Twitch_Client_ID,
    },
  });

  if (!response.ok) {
    throw new Error(`Twitch API error: ${response.status} ${response.statusText}`);
  }

  const result: GetUser = await response.json();
  return result.data[0];
}

export default getUsersId;
