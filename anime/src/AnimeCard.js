import React from 'react'
import "./AnimeCard.css";
function AnimeCard({ anime }) {
  return (
    <article className='char'>
        <figure>
            <img src={anime.image_url} alt="anime image"/>
        </figure>
    </article>
  )
}

export default AnimeCard
