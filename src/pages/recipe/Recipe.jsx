// styles
import './Recipe.css'

// hooks
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useEffect } from 'react'

// components
import Spinner from '../../components/Spinner'

function Recipe() {
  const { id } = useParams()
  const url = "http://localhost:3000/recipes/" + id
  const { data: recipe, isPending, error } = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'><Spinner /></p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe