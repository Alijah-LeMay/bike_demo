import React from 'react'
import classes from './SpecScreen.module.css'

const SpecScreen = () => {
  return (
    <div className={classes.specScreenContainer}>
      <div>
        <h2>Specs</h2>
      </div>
      <div className={classes.specRow}>
        <div className={classes.specContainer}>
          <div className={classes.icon}>icon</div>
          <div>
            <h3>35 mph</h3>
            <p>Get from A to B with speed</p>
          </div>
        </div>
        <div className={classes.specContainer}>
          <div className={classes.icon}>
            icon
            <i
              className='fa-gauge'
              style={{ fontSize: '3rem', color: 'white', padding: '0 10px' }}
            ></i>
          </div>
          <div>
            <h3>Lifetime Warranty</h3>
            <p>Cruise stress free with warranty</p>
          </div>
        </div>
      </div>
      <div className={classes.specRow}>
        <div className={classes.specContainer}>
          <div className={classes.icon}>icon</div>
          <div>
            <h3>~22 lbs</h3>
            <p>Lightweight and agile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecScreen
