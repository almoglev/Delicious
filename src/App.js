import { BrowserRouter, Route, Switch } from 'react-router-dom'

// styles
import './App.css'

// pages
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/recipes/:id">
            <Recipe />      
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
