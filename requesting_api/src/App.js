import React, {useState, useEffect} from 'react';
import './App.css';

import Navbar from '../src/components/Header/Navbar';
import Movie from '../src/components/Body/Movie.js'

function App() {
  const [movieData, setMovieData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  function onFilter(inputString){
    let newData = movieData.filter(d =>{
      return d.title.toLowerCase().startsWith(inputString.toLowerCase());
    })
    setFilteredData(newData);
  }

  useEffect(() =>{
    let url = 'https://swapi.dev/api/films';
    fetch(url).then(res => res.json()).then(data => {
     let resultData = data.results;
     resultData = resultData.map(d => {
      return {
        "title":d.title,
        id:d["episode_id"],
        "crawl" : d["opening_crawl"],
        "release_date" : d["release_date"]
      }
     });

     console.log(resultData);
     setMovieData(resultData);
     setFilteredData(resultData);
    })
  }, []);

  let filteredMovies = <ul>
  {filteredData.map(d => <li key={d.id}><Movie title={d.title} crawl={d.crawl} release={d["release_date"]}></Movie></li>)}
</ul>;

let emptySet = <div>NO data</div>

  return (
    <React.Fragment>
      <Navbar onFilter={onFilter}>
      </Navbar>
      <section >
        {filteredData.length == 0 ? emptySet : filteredMovies}
      </section>
    </React.Fragment>
  );
}

export default App;
