import './App.css'
import DisplayScreen from './screens/DisplayScreen'
import LandingScreen from './screens/LandingScreen'
import SpecScreen from './screens/SpecScreen'
import OrderScreen from './screens/OrderScreen'

function App() {
  return (
    <div>
      <LandingScreen />
      <SpecScreen />
      <DisplayScreen />
      <OrderScreen />
    </div>
  )
}

export default App
