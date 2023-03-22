import React from 'react'
import bike_image from '../../assets/images/bike_gradient.png'
import classes from './LandingScreen.module.css'
const LandingScreen = () => {
  return (
    <div className={classes.landingScreenContainer}>
      <img src={bike_image} alt='Check out this amazing beach cruiser!' />
    </div>
  )
}

export default LandingScreen
