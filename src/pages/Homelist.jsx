import React, { useContext } from 'react'
import { Content } from '../context/Content';
import Animetile from '../components/Animetile';
import Top from '../components/Top';


const Homelist = () => {
    const { data } = useContext(Content);
  return (
    <>
    <Top/>
    <div className='w-full h-full bg-[rgba(7,0,23,0.9)] grid grid-cols-3'>
        {data.map((anime) => <Animetile anime={anime} key={anime.title + anime.episode} /> )}
    </div>
    </>
  )
}

export default Homelist