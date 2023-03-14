import React from 'react'
import classes from './OrderScreen.module.css'

const OrderScreen = () => {
  return (
    <div className={classes.orderScreenContainer}>
      <div className={classes.formContainer}>Form goes here</div>
      <div className={classes.columnTwo}>
        <div>
          <h3>Get Out There</h3>
          <p>Start exploring, be daring.</p>
        </div>
        <div>
          <h3>Time to Cruise</h3>
          <p>Order now and have it shipped within thirty days.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderScreen
