import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {useState, useEffect} from 'react'



function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime/`)
    .then(res => res.json());

    setTopAnime(temp.data.slice(0,5));
  }

  useEffect(() => {
    getTopAnime();
  }, [])

  console.log(topAnime);
  console.log(getTopAnime)
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
