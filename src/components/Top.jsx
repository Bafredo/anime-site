import React , { useContext } from 'react'
import { Content } from '../context/Content'
import FeaturedTile from './FeaturedTile'

const Top = () => {
    const { data } = useContext(Content)
    const newData = data.slice(0, 20)
    
    const getUniqueValues = (fdata) =>{
        let unique = [];
        fdata.map((item) => {
            if (unique.indexOf(item.title) === -1) {
                unique.push(item.title);
            }
        })
        return unique
    }
    const featuredTitles = getUniqueValues(newData)

    const featuredIndex = (featuredTitles) => {
        let index = []
        for(let i = 0; i < featuredTitles.length; i++){
            index.push(newData.findIndex((item) => item.title === featuredTitles[i])
            )
        }
        return index
    }

    const index = featuredIndex(featuredTitles)


  return (
    <div className='w-full'>
    <div className='w-full overflow-hidden mt-20 flex justify-center items-center bg-[rgba(3,1,10,0.99)]' >
    
    <FeaturedTile current = {newData[index[0]]}/>
    </div>
   
    </div>
  )
}

export default Top