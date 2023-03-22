import React from 'react'
import classes from './Footer.module.css'

const year = new Date().getFullYear()

const FooterScreen = () => {
  return (
    <div className={classes.footerScreenContainer}>
      <p>&copy; LemaTech LLC {year} </p>
    </div>
  )
}

export default FooterScreen
