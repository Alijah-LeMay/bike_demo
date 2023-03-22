import React from 'react'
import classes from './SpecScreen.module.css'

const SpecScreen = () => {
  return (
    <div className={classes.specScreenContainer}>
      <h3 className={classes.tag}>Specs</h3>
      <div className={classes.specRow}>
        <div className={classes.specContainer}>
          <div className={classes.icon}>
            <i
              className='fa-solid fa-gauge-high'
              style={{ fontSize: '3rem', color: '#3c3f28', padding: '0 10px' }}
            ></i>
          </div>{' '}
          <div>
            <h3>35 mph</h3>
            <p>Get from A to B with speed</p>
          </div>
        </div>
        <div className={classes.specContainer}>
          <div className={classes.icon}>
            <i
              className='fa-solid fa-shield'
              style={{ fontSize: '3rem', color: '#3c3f28', padding: '0 10px' }}
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
          <div className={classes.icon}>
            <i
              className='fa-solid fa-weight-hanging'
              style={{ fontSize: '3rem', color: '#3c3f28', padding: '0 10px' }}
            ></i>
          </div>
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
