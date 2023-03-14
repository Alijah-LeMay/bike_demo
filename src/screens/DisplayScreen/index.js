import React from 'react'
import classes from './DisplayScreen.module.css'
import beach_city from '../../assets/images/beach_city.jpg'
import beach_feet from '../../assets/images/beach_feet.jpg'
import beach_ocean from '../../assets/images/beach_ocean.jpg'
import beach_sunset from '../../assets/images/beach_sunset.jpg'

const DisplayScreen = () => {
  return (
    <div className={classes.displayScreenContainer}>
      <div className={classes.column}>
        <img src={beach_ocean} alt={beach_ocean} />
      </div>
      <div className={classes.columnTwo}>
        <div className={classes.imageRow}>
          <img src={beach_sunset} alt={beach_sunset} />
        </div>
        <div className={classes.imageRow}>
          <img src={beach_city} alt={beach_city} />
        </div>
      </div>
      <div className={classes.column}>
        <img src={beach_feet} alt={beach_feet} />
      </div>
    </div>
  )
}

export default DisplayScreen
