import React from 'react'
import { motion } from 'framer-motion';

const News = ({result}) => {
  return (
     <motion.div className='newsContainer' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
     <div className="container">
     <h3 className='errormsg'>{result.message}</h3>
     <div className="srchResultHolder">
     {result?.entries?.map((item, index) => (
          <div className="entryBox" key={item.id}>
               <a href={item.link} target='_blank'>
               <p className='linkResult'>{item.title}</p>
               <p>{item.source.href}</p>
               <p className='resultsInSeconds'>{item.published}</p>
               </a>
          </div>
     ))}
     </div>

     </div>
     </motion.div>
  )
}

export default News