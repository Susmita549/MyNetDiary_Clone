import React from 'react'
import Footer from '../components/Dashboard/Footer'
import Navbar from '../components/Dashboard/Navbar'
import SmNavbar from '../smComponents/smNavbar/SmNavbar'
import SmNavPage from '../smComponents/smNavbar/SmNavPage'
import WeightCalories from '../smComponents/smPages/WeightCalories'
import SmSidebar from "../smComponents/smSide/SmSidebar"


const Plan = () => {
  return (
    <>
    
      <section>
        <div> <Navbar/> </div>
      </section>

      

      <section>
        <div style = {{ backgroundColor:"rgb(240,240,240)"}}>
          <div><SmSidebar /></div>
          <div> <WeightCalories />  </div>
          
        </div>
       
        
      </section>

      <Footer/>


    </>
  )
}

export default Plan