const Twitch_Client_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;

interface channel {
  channel_name: string;
  channel_title: string;
  channel_game: string;
  channel_viewers: number;
}

interface followedChannels {
  data: channel;
}

async function twitchFollow(accesstoken: string, user) {
  return (
    <div>twitchFollow</div>
  )
};

export default twitchFollow;
