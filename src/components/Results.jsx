import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading'
import { useResultContext } from './context/ResultContext';
import Search from './Pages/Search';
import Images from './Pages/Images';
import News from './Pages/News';
import Videos from './Pages/Videos';
const Results = () => {
  const {result , isLoading , getResults , searchTerm} = useResultContext();
  const location = useLocation();
  useEffect(() => {
    if(location.pathname == '/images'){
      getResults(`/image/q=${searchTerm}&num=40`)
    }else if(location.pathname == '/'){
      getResults(`/search/q=${searchTerm}&num=40`)
    }
    else if(location.pathname == '/news'){
      getResults(`/news/q=${searchTerm}&num=40`)
    }
    else if(location.pathname == '/videos'){
      getResults(`/video/q=${searchTerm}&num=40`)
    }
  }, [location.pathname, searchTerm])
  if(isLoading) return <Loading />
  switch (location.pathname) {
      case '/':
      return (
          <Search result={result}/>
      ) ;
      case '/news':
        return (
          <News result={result}/>
        ) ;
      case '/images':
        return (
          <Images result={result}/>
        );
        case '/videos':
          return (
          <Videos result={result} />
          ) ;
    default:
      return 'ERROR!'
  }
}

export default Results
