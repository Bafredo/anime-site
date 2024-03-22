import React from 'react'

const Animetile = (props) => {
    const anime = props.anime
  return (
    <div className='m-1 p-3 bg-[rgba(0,0,0,0.5)] rounded-xl'>
        <div className='w-100 h-100 flex justify-center items-center '>
        <img className='w-100 h-100 rounded-md' src={anime.thumbnail} alt="" />
        </div>
        <h1>{anime.title}</h1>
        <p>Episode :{anime.episode}</p>
        <p>Genres :{anime.genres}</p>
        <p>Year :{anime.year}</p>
        <p>Type :{anime.type}</p>
        
    </div>
  )
}

export default Animetile