import React from 'react'
import Button from '../components/Button'
import {GoBell, GoCloud, GoDatabase} from 'react-icons/go'

function ButtonPage() {
  const handleClick = () => {
    console.log('clicked!')
  }
  return (
    <div>
      <div>
        <Button
          success 
          rounded 
          outline 
          className="mb-5"
          onClick ={handleClick}>
          <GoBell/>
          click!</Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloud/>
          Buy Now!
          </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase/>
          see Deal!</Button> 
      </div>
      <div>
        <Button secondary outline>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>something!</Button>
      </div>
    </div>
  )
}

export default ButtonPage;