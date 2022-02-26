import { projectFirestore } from '../../firebase/config'
import { useState, useEffect } from 'react'

// styles
import './Home.css'

// components
import RecipeList from '../../components/RecipeList'
import Spinner from '../../components/Spinner'

function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    setIsPending(true)

    // connect to the recipes collection and fetch the data in this collection
    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('Sorry, no recipes to load...')
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          const recipe = { id: doc.id, ...doc.data() }
          results.push(recipe)
        })
        setData(results)
      }
      setIsPending(false)
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
  }, [])

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'><Spinner /></p>}
      {data && <RecipeList recipes={data}/>}
    </div>
  )
}

export default Home