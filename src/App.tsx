import { useEffect, useState } from 'react';
import getTwitchFollow from './api/twitch/twitchFollow';
import twitchLogin from './api/twitch/twitchLogin';
import getUsersId from './api/twitch/twitchUser';
import './App.css';
import NavBar from './components/NavBar';
import browser from 'webextension-polyfill';
import { type channel } from './components/StreamCard';
import StreamCards from './components/StreamCards';

function App() {
  const [streams, setStreams] = useState<channel[]>([]);

  // Storing token in .storage.local
  async function saveToken(accessToken: string): Promise<void> {
    await browser.storage.local.set({ twitchAccessToken: accessToken });
  }

  // Gets the stored token of the user
  async function getStoredToken(): Promise<string | undefined> {
    const result = await browser.storage.local.get('twitchAccessToken');
    return result.twitchAccessToken as string | undefined;
  }

  // Takes token and updates streams list
  const loadStreams = async (token: string) => {
    const user = await getUsersId(token);
    const followed = await getTwitchFollow(token, user.id);
    setStreams(followed);
  };

  // Runs loadStreams if we have a stored token when we open
  useEffect(() => {
    const init = async () => {
      const storedToken = await getStoredToken();
      if (storedToken) {
        await loadStreams(storedToken);
      }
    };
    init();
  }, []);

  // Twitch login handle
  const handlelogin = async () => {
    try {
      const token = await twitchLogin();
      await saveToken(token);
      await loadStreams(token);
    } catch (err) {
      console.error('Failed:', err);
    }
  };

  return (
    <main className="w-95 h-80">
      <NavBar />
      <StreamCards streams={streams} />
      <div className="absolute bottom-0">
        <button onClick={handlelogin} className="text-white">
          Login
        </button>
      </div>
    </main>
  );
}

export default App;
