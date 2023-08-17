import React from 'react'

const ProgressBar = ({progress}) => {

  const colors = [
    'rgb(255, 214, 131)',
    'rgb(255, 145, 167)',
    'rgb(100, 112, 132)',
    'rgb(121, 250, 10)',
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div className='outer-bar'>
      <div 
      className='inner-bar'
      style={{width: `${progress}%`, backgroundColor: randomColor }}
      ></div>
    </div>
  )
}

export default ProgressBar
