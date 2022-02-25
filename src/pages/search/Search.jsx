import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Search.css'

// components
import RecipeList from '../../components/RecipeList'
import Spinner from '../../components/Spinner'

function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q').trim()

  const url = 'http://localhost:3000/recipes?q=' + query
  const {error, isPending, data} = useFetch(url)

  if (query === ""){
    return  <h2 className="page-title">Sorry, no results</h2>
  }

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'><Spinner /></p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Search