import React from 'react'

const FeaturedTile = (props) => {
    const anime = props?.current
  return (
    <>
    <div className='w-full p-1 flex justify-center relative' style={{backgroundImage: `url(${anime?.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <img className='w-[150px] h-fit' src={anime?.thumbnail} alt={anime?.title} />
        <div className='w-full h-fit ml-5 mt-5 bg-[rgba(0,0,0,0.5)] p-2 mb-2 rounded-md'>
            <p className='text-[aqua] text-md font-bold mb-2'>{anime?.title}</p>
            <div>
            
            <p className='text-[aquamarine] text-sm flex items-center gap-2'>
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd"/>
            </svg>

                 : {anime?.year}</p>
            <p className='text-[aquamarine] text-sm flex items-center gap-2'>
                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z" clipRule="evenodd"/>
                </svg>
                 : {anime?.type}</p>
            
            </div>

            <p className='text-[aquamarine] text-sm flex'>
                
                Genres
                : {anime?.genres}</p>   

            <p className='text-white text-sm'>{anime?.plot}</p>
            <button className='w-[100px] mt-5 bg-indigo-800 text-white text-sm p-2 p-1 hover:bg-[aqua] hover:text-black rounded-md'>Watch now</button>
        </div>
    </div>
    
    </>
  )
}

export default FeaturedTile