import './App.css';
import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import {Fragment, default as React} from 'react' //maybe temp fix and have to delete later
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner';

function App() {
    let [searchTerm, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([null])

    const API_URL = 'https://itunes.apple.com/search?term='

    useEffect(() => {
        if (searchTerm) {
            setData(fetchData(searchTerm))
        }
    }, [searchTerm])
    
    
    
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    const renderGallery = () => {
        if(data) {
            return (
                <Suspense fallback={<Spinner />}>
                    <Gallery data={data} />
                </Suspense>
            )
        }
    }
    
        return (
            <div className="App">
                <SearchBar handleSearch={handleSearch} />
                {message}
                {renderGallery()}
            </div>
        )
    }
    
    export default App;

    /*return (
        <div>
        {message}
            <Router>
                <Routes>
                    <Route path="/" element={
                        //Fragments are used to place more than one component into an element.
                        <Fragment>
                            <SearchBar handleSearch = {handleSearch}/>
                            <Gallery data={data} />
                        </Fragment>
                    } />
                    <Route path="/album/:id" element={<AlbumView />} />
                    <Route path="/artist/:id" element={<ArtistView />} />
                </Routes>
            </Router>
        </div>
    )
    
}*/










//Serch State: this will make our API search happen at the App level "so data is avaliable to all children"
//Data State: data from API call, stored in state so we don't lose it when app triggers a re-render
 // Message State: to capture any error or success messages from API call