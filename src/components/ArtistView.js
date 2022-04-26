// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const { id } = useParams() //a 'hook' used to allow us to access the URL parameters
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}


export default ArtistView
