import React, {createContext, useContext, useState} from 'react'
const ResultContext = createContext();
const BASE_URL = 'https://google-search3.p.rapidapi.com/api/v1';
export  const ResultContextProvider = ({children}) =>{
     const [result, setResult] = useState([]);
     const [isLoading, setLoading] = useState(false);
     const [searchTerm, setSearchTerm] = useState('google');
     const getResults = async (type) => {
          setLoading(true);
          const response = await fetch(`${BASE_URL}${type}`, {
               method: 'GET',
               headers: {
                    'X-User-Agent': 'desktop',
                    'X-Proxy-Location': 'EU',
                    'X-RapidAPI-Key': 'f5a7f1d3eemsh3fe49ced8f9e6bbp1805ebjsn45b36e017d1f',
                    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                  }
          });
          const data = await response.json();
          setResult(data);
          setLoading(false);
     }
     return(
          <ResultContext.Provider value={{getResults, result , searchTerm, setSearchTerm, isLoading}}>
               {children}
          </ResultContext.Provider>
     )
}
export const useResultContext = () => useContext(ResultContext);
