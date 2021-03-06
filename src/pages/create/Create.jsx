import { useRef, useState } from 'react'
import  { useHistory } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

// styles
import './Create.css'

function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const history = useHistory()
  const { mode } = useTheme()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newRecipe = {
      title, 
      ingredients, 
      method, 
      cookingTime: cookingTime + " minutes"
    }

    try {
      await projectFirestore.collection('recipes').add(newRecipe)
      history.push('/')
    } catch(err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
      
    }
    ingredientInput.current.focus()
    setNewIngredient('')
  }

  return (
    <div className={`create ${mode}`}>
      <h2 className={`page-title ${mode}`}>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className='btn' onClick={handleAdd}>add</button>
          </div>
        </label>
        <p>{(ingredients && ingredients.length > 0) && "Current ingredients: "}
          {ingredients.map((item)=>(
            <em key={item}>{item}, </em>
        ))}</p>

        <label>
          <span>Recipe method:</span>
          <textarea 
            onChange ={(e) => setMethod(e.target.value)}
            value= {method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number" 
            onChange ={(e) => setCookingTime(e.target.value)}
            value= {cookingTime}
            required
          />
        </label>

        <button className='btn'>Submit</button>
      </form>

    </div>
  )
}

export default Create