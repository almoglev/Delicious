import { Link } from 'react-router-dom'
import burger from '../assets/burger1.png'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

function Navbar() {
  return (
    <div className='navbar'>
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