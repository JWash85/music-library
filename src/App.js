//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'


const App = () => {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
      if(search) {
          const fetchData = async () => {
              document.title = `${search} music`
              const response = await fetch(API_URL + search)
              const resData = await response.json()
              if (resData.results.length > 0) {
                  return setData(resData.results)
              } else {
                  return setMessage('Not Found.')
              }
          }
          fetchData()
      }
  }, [search])

  const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }

  return (
      <div>
          <SearchBar handleSearch={handleSearch} />
          {message}
          <Gallery data={data} />
      </div>
  )
}

export default App




//Serch State: this will make our API search happen at the App level "so data is avaliable to all children"
//Data State: data from API call, stored in state so we don't lose it when app triggers a re-render
 //Message State: to capture any error or success messages from API call