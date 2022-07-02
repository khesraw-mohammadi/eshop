import React from 'react'
import { Alert } from 'react-bootstrap'


function Message({variant, text}) {
  return (
    <Alert key={variant} variant={variant}>
         {text}
    </Alert>
  )
}

export default Message
