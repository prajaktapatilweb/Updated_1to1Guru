import React from 'react'
import { Field } from 'formik'
// import TextError from './TextError'
// import { ReactstrapInput } from "reactstrap-formik";
import { Input } from 'reactstrap'


function Input1(props) {
  const { label, name, ...rest } = props
  return (
    <div className='textOnInput mb-4'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest}
        // component={ReactstrapInput}
        component={Input}
      />
      {/* <ErrorMessage component={TextError} name={name} /> */}
    </div>
  )
}

export default Input1
