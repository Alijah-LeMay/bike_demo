import React, { useState, useRouter } from 'react'
import FormField from '../../components/FormField'
import classes from './OrderScreen.module.css'

const OrderScreen = () => {
  const [status, setStatus] = useState('Submit')
  const [infoMessage, setInfoMessage] = useState('Submit')

  const [formState, setFormState] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Message: '',
  })
  const router = useRouter()

  const formConfig = {
    Name: {
      type: 'input',
      config: { type: 'text', placeholder: 'Name' },
    },
    Phone: {
      type: 'input',
      config: { type: 'text', placeholder: 'Phone' },
    },
    Email: {
      type: 'input',
      config: { type: 'text', placeholder: 'Email' },
    },
    Message: {
      type: 'textarea',
      config: { type: 'textarea', placeholder: 'Message' },
    },
  }
  // Prepare formState objects
  const formElements = []

  for (let key in formState) {
    formElements.push({
      id: key,
      setup: formConfig[key],
      value: formState[key],
    })
  }

  const inputChangedHandler = (event, inputIdentifier) => {
    formElements.forEach((formElement) => {
      if (inputIdentifier === formElement.id) {
        setFormState({
          ...formState,
          [inputIdentifier]: event.target.value,
        })
      }
    })
  }

  const submitFormHandler = (event) => {
    event.preventDefault()
    console.log(event)

    const webDevIcon = (
      <i
        style={{ float: 'right', margin: '5px' }}
        className='fa-brands fa-wordpress'
      ></i>
    )

    if (
      formState.Name === undefined ||
      formState.Name === null ||
      formState.Name === '' ||
      formState.Name.length < 1
    ) {
      setInfoMessage('Please enter your Name')

      return
    }
    if (
      formState.Email === undefined ||
      formState.Email === null ||
      formState.Email === '' ||
      formState.Email.length < 1
    ) {
      setInfoMessage('Please enter your Email')

      return
    }

    setInfoMessage(null)

    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setStatus('submit')
      }
    })
    router.push('/thankyou')
  }
  // Prepare Mail Logic

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setStatus('Sending...')
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   let response = await fetch('http://localhost:5000/contact', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(details),
  //   })
  //   setStatus('Submit')
  //   let result = await response.json()
  //   alert(result.status)
  // }

  // Post logic

  return (
    <div className={classes.orderScreenContainer}>
      <div className={classes.formContainer}>
        <form onSubmit={(event) => submitFormHandler(event)}>
          <h3>Order</h3>
          {formElements.map((formElement) => (
            <FormField
              key={formElement.id}
              type={formElement.setup.type}
              config={formElement.setup.config}
              value={formElement.value}
              // label={formElement.setup.config.placeholder}
              changed={(event) => inputChangedHandler(event, formElement.id)}
            />
          ))}
          <div>
            <button className={classes.submitButton} type='submit'>
              Order Now
            </button>
          </div>
        </form>
      </div>
      <div className={classes.columnTwo}>
        <div className={classes.orderContent}>
          <h3>Get Out There</h3>
          <p>Start exploring, be daring.</p>
        </div>
        <div className={classes.orderContent}>
          <h3>Time to Cruise</h3>
          <p>Order now and have it shipped within thirty days.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderScreen
