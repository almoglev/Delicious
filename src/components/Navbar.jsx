import { Link } from 'react-router-dom'
import burger from '../assets/burger1.png'
import { useContext } from 'react'
import Searchbar from './Searchbar'
import { ThemeContext } from '../context/ThemeContext'

// styles
import './Navbar.css'

function Navbar() {
  const { color } = useContext(ThemeContext)
  return (
    <div className='navbar' style= {{ background: color}}>
        <nav>
            <Link to='/' className='brand'>
                <h1>
                  <img src={burger} alt="" width="40px"/>&nbsp;
                  Delicious.
                </h1>
            </Link>
            <Searchbar />
            <Link to='/create'>Create Recipe</Link>
        </nav>
    </div>
  )
}

export default Navbar