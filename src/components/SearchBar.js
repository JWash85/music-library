import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

function SearchBar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
        </form>
    )
}



export default SearchBar

/**SearchTerm: to store the search term somewhere as we type it
 * to "control" the form
 * *** controlled form is to avoid having to implement different hooks to reference the DOM
 * *** instead the local state will represent the user's imput */
