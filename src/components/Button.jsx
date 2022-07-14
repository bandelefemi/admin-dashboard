import React from 'react'

const Button = ({color, bgColor, text, borderRadius, size}) => {
  return (
    <button style={{color, backgroundColor: bgColor, borderRadius}}
            type='button'
            className={`text-${size} p-3 hover:drop-shadow-xl` } >
      {text}        
    </button>
  )
}

export default Button
