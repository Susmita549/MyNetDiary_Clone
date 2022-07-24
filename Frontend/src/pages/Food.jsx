import React from 'react'
import Footer from '../components/Dashboard/Footer'
import Navbar from '../components/Dashboard/Navbar'
import SmFoodNew from "../smComponents/smFood/SmFoodNew"

const Food = () => {
  return (
    <>
    <Navbar/>
      <SmFoodNew />
      <Footer/>
    
    </>
  )
}

export default Food