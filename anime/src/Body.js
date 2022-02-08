import React, { useState, useEffect } from 'react'

import "./Body.css";
import MainContent  from './MainContent';

function Body() {
    const [animeList,setAnimeList] = useState([]);
    const [search,setSearch] = useState("");

   const HandleSearch = e => {
    e.preventDefault();
    
    FetchAnime(search);
   }

   const FetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=picture&sort=asc&limit=4`)
        .then(res => res.json());
        
        setAnimeList(temp.results);
   }

    
  return (
    <div className='body'>
      <div className='drop'>
       <MainContent
       HandleSearch={HandleSearch}
       search={search}
       setSearch={setSearch}
       animeList={animeList}
       />
      </div>

      
    </div>
  )
}

export default Body
