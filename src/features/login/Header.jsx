import React from 'react'
import { useSelector } from 'react-redux'
import { selectProfile } from './loginSlice'

const Header = () => {
  const profile = useSelector( selectProfile )
  return (
    <div className='header'>
      <h3>{profile.username}</h3>
      <h1>Today's task</h1>
    </div>
  )
}

export default Header
