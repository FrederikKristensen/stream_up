import getTwitchFollow from './api/twitch/twitchFollow';
import twitchLogin from './api/twitch/twitchLogin';
import getUsersId from './api/twitch/twitchUser';
import './App.css';
import NavBar from './components/NavBar';
import browser from 'webextension-polyfill';

function App() {
  // Storing in .storage.local
  async function saveToken(accessToken: string): Promise<void> {
    await browser.storage.local.set({ twitchAccessToken: accessToken });
  }

  async function getStoredToken(): Promise<string | undefined> {
    const result = await browser.storage.local.get('twitchAccessToken');
    return result.twitchAccessToken as string | undefined;
  }

  // Twitch login handle
  const handlelogin = async () => {
    try {
      const token = await twitchLogin();
      await saveToken(token);

      const storedToken = await getStoredToken();
      console.log('Stored token: ', storedToken); // to check the token storage works

      const user = await getUsersId(token);
      console.log('User is: ', user); // to check if get user works

      const followed = await getTwitchFollow(token, user.id);
      console.log('Followed streams: ', followed);
    } catch (err) {
      console.error('Failed:', err);
    }
  };

  return (
    <main className="w-95 h-80">
      <NavBar />
      <div className="absolute bottom-0">
        <button onClick={handlelogin} className="text-white">
          Login
        </button>
      </div>
    </main>
  );
}

export default App;
