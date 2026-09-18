import { useEffect, useState } from 'react';
import getTwitchFollow from './api/twitch/twitchFollow';
import twitchLogin from './api/twitch/twitchLogin';
import getUsersId from './api/twitch/twitchUser';
import './App.css';
import NavBar from './components/NavBar';
import browser from 'webextension-polyfill';
import { type stream } from './components/StreamCard';
import StreamCards from './components/StreamCards';
import './Scrollbarstyling.css';

function App() {
  const [streams, setStreams] = useState<stream[]>([]);

  // Storing token in .storage.local
  async function saveToken(accessToken: string): Promise<void> {
    await browser.storage.local.set({ twitchAccessToken: accessToken });
  }

  // Gets the stored token of the user
  async function getStoredToken(): Promise<string | undefined> {
    const result = await browser.storage.local.get('twitchAccessToken');
    return result.twitchAccessToken as string | undefined;
  }

  // Twitch profile picture
  const [currentUser, setCurrentUser] = useState<{ profile_image_url: string } | undefined>(
    undefined
  );

  // Takes token and updates streams list
  const loadStreams = async (token: string) => {
    const user = await getUsersId(token);
    setCurrentUser(user);
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

  //
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStreams = streams.filter((stream) => stream.user_name.includes(searchQuery));

  // Twitch login handle
  const handleTwitchLogin = async () => {
    try {
      const token = await twitchLogin();
      await saveToken(token);
      await loadStreams(token);
    } catch (err) {
      console.error('Failed:', err);
    }
  };

  // themes
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <main className="w-95 h-150 flex flex-col bg-ui-bg">
      <div className="shrink-0">
        <NavBar
          TwitchHandle={handleTwitchLogin}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          theme={theme}
          setTheme={setTheme}
          currentUser={currentUser}
        />
      </div>
      <div className="flex-1 overflow-y-scroll streamlist">
        <StreamCards streams={filteredStreams} />
      </div>
    </main>
  );
}

export default App;
