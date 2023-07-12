import React,{useState, useEffect} from 'react'
import {BiFilter} from 'react-icons/bi'
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../context/ResultContext';

const SearchBar = () => {
  const [text , setText] = useState();
  const {setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text , 300);
  useEffect(() => {
    if(debouncedValue){
      setSearchTerm(debouncedValue)
    }
  }, [debouncedValue])
  return (
    <div className='srchInptHolder'>
     <BiFilter />
      <input type="text" placeholder='search' className="srchValue" value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default SearchBar
