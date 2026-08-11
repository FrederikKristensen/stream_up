import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import StreamCards from './components/StreamCards';
import fetchData from './api/fetchData';

function App() {
  const [name, setName] = useState<string>('');

  // useEffect(() => {
  //   fetchData(URL).then((result) => setName(result.name));
  // }, []);

  return (
    <>
      
      <NavBar />
      <StreamCards />
      <div>The pokemon name is: {name}</div>
    </>
  );
}

export default App;
