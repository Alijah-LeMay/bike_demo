import './App.css'
import DisplayScreen from './screens/DisplayScreen'
import LandingScreen from './screens/LandingScreen'
import SpecScreen from './screens/SpecScreen'
import OrderScreen from './screens/OrderScreen'
import FooterScreen from './screens/Footer'

function App() {
  return (
    <div>
      <LandingScreen />
      <SpecScreen />
      <DisplayScreen />
      <OrderScreen />
      <FooterScreen />
    </div>
  )
}

export default App
