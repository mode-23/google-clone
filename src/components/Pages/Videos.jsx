import React from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion';

const Videos = ({result}) => {
console.log(result.results[3]);
  return (
     <motion.div className="videoSection" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
<div className="container">
    <div className='imageResult'>
     {result?.results?.map((item, index) => (
          <div className="vdbox"  key={index}>
          <ReactPlayer url={item.additional_links?.[0].href} controls width='355px' height='200px' />
          </div>
     ))}
     </div>
     </div>
     </motion.div>

  )
}

export default Videos