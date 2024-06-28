import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import HPage from './hpage'
import WeatherData from '../components/weather'

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  return (
      <>
          {/* <h1>
              Home Page
      </h1> */}
      <WeatherData />
      {/* <pre>{ JSON.stringify(auth,null,4) }</pre> */}
    </>
  )
}

export default HomePage