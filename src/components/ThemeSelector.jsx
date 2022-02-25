import { useTheme } from '../hooks/useTheme'

// styles
import './ThemeSelector.css'

const themeColor = ['#58249c', '#018DDE', '#249c6b']
function ThemeSelector() {
    const { changeColor } = useTheme()

  return (
    <div className='theme-selector'>
        <div className='theme-buttons'>
            {themeColor.map(color => (
                <div 
                  key={color}
                  onClick={() => changeColor(color)}
                  style={{ background: color }}
                />
            ))}
        </div>
    </div>
  )
}

export default ThemeSelector