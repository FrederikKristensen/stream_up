import './App.css';
import NavBar from './components/NavBar';
import StreamCards from './components/StreamCards';
import twitchAPI from './api/twitchAPI';

function App() {
  // useEffect(() => {
  //   fetchData(URL).then((result) => setName(result.name));
  // }, []);

  const handlelogin = async () => {
    console.log('btn clicked');
    try {
      const token = await twitchAPI();
      console.log('Token:', token);
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
