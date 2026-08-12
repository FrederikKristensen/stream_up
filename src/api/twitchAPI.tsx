import browser from 'webextension-polyfill';

const Twitch_Client_ID = import.meta.env.VITE_TWITCH_CLIENT_ID as string;

function getTwitchRedirectURL(): string {
  return browser.identity.getRedirectURL();
}

function buildAuthURL(): string {
  const params = new URLSearchParams({
    client_id: Twitch_Client_ID,
    redirect_uri: getTwitchRedirectURL(),
    response_type: 'token',
    scope: 'user:read:follows',
  });
  return `https://id.twitch.tv/oauth2/authorize?${params.toString()}`;
}

async function twitchAPI(): Promise<string> {
  const authURL = buildAuthURL();
  const redirectURL = await browser.identity.launchWebAuthFlow({
    url: authURL,
    interactive: true,
  });

  if (!redirectURL) {
    throw new Error('Twitch login failed or was cancelled.');
  }
  const hash = new URL(redirectURL).hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');

  if (!accessToken) {
    throw new Error('No access token returned from Twitch.');
  }
  return accessToken;
}

export default twitchAPI;
