import React from 'react'
import { motion } from 'framer-motion';

const Search = ({result}) => {
  return (
    <motion.div className='searchSection' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
     <div className="container">
     {
          result.message?
          <></>
          :
     <span className='resultsInSeconds'>About {result.total} results ({result.ts} seconds)</span>
     }
     <h3>{result.message}</h3>
     <div className="srchResultHolder">
     {result?.results?.map((item, index) => (
          <div className="bx" key={index}>
               <a href={item.link} target='_blank' >
                    <p className='titleResult'>{item.link.length > 30 ? item.link.substring(0,30) : item.link}</p>
                    <p className='linkResult'>{item.title}</p>
                    <p className='titleResult2'>{item?.cite?.domain}</p>
               </a>
          </div>
     ))}
     </div>

     </div>
     </motion.div>
  )
}

export default Search