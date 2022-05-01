import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar(props){
    // We can comment out our searchTerm state variable as we are not using it!
    // let [searchTerm, setSearchTerm] = useState('')

    return (
            <form>
                <input type="text" placeholder="Search Here"
                    onChange={
                        (e) => props.handleSearch(e, e.target.value)
                    } />
                <input type="submit" />
            </form>
    )
}

export default SearchBar

/**SearchTerm: to store the search term somewhere as we type it
 * to "control" the form
 * *** controlled form is to avoid having to implement different hooks to reference the DOM
 * *** instead the local state will represent the user's imput */
