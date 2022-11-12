import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {useState, useEffect} from 'react'



function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header/>
      <div className='content-wrap'>
          <Sidebar topAnime={topAnime}/>
          <Main/>
      </div>
    </div>
  );
}

export default App;
