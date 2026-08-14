import twitchLogin from './api/twitch/twitchLogin';
import './App.css';
import NavBar from './components/NavBar';
import StreamCards from './components/StreamCards';
import browser from 'webextension-polyfill';

function App() {
  // Storing in .storage.local
  async function saveToken(accessToken: string): Promise<void> {
    await browser.storage.local.set({ twitchAccessToken: accessToken });
  }

  async function getStoredToken(): Promise<string | undefined> {
    const result = await browser.storage.local.get('twitchAccessToken');
  }

  // Twitch login handle
  const handlelogin = async () => {
    try {
      const token = await twitchLogin();
      await saveToken(token);
    } catch (err) {
      console.error('Failed:', err);
    }
  };

  return (
    <>
      <NavBar />
      <StreamCards />
      <button onClick={handlelogin}>Login</button>
    </>
  );
}

export default App;
