//import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext';



const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])
  let searchInput = useRef('')

  const API_URL = 'https://itunes.apple.com/search?term='

  
  const handleSearch = (e, term) => {
      e.preventDefault()
      const fetchData = async () => {
        document.title = `${term} music`
        const response = await fetch(API_URL + term)
        const resData = await response.json()
        if (resData.results.length > 0) {
            return setData(resData.results)
        } else {
            return setMessage('Not Found.')
        }
    }
    fetchData()
      setSearch(term)
  }

  return (
      <div>
          <SearchContext.Provider value={{
              term: searchInput,
              handleSearch: handleSearch
          }}>
          <SearchBar />
          </SearchContext.Provider>
          {message}
          <DataContext.Provider value={data} >
          <Gallery /*data={data}*/ />
          </DataContext.Provider>
      </div>
  )
}

export default App




//Serch State: this will make our API search happen at the App level "so data is avaliable to all children"
//Data State: data from API call, stored in state so we don't lose it when app triggers a re-render
 //Message State: to capture any error or success messages from API call