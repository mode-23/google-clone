import React from 'react'
import { motion } from 'framer-motion';

const Images = ({result}) => {
  return (
    <motion.div className="imageSection" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="container">
     <h3 className='errormsg'>{result.message}</h3>
    <div className="imageResult">
      {result?.image_results?.map((item, index) => (
        <div  key={index} className='imgrsltBox'>
          <a href={item?.link.href} target='_blank'>
        <img src={item?.image.src} loading='lazy' />
        <p>{item?.link.title}</p>
        </a>
        </div>
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Images