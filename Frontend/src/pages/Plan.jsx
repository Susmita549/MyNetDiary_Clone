import React from 'react'
import SmNavbar from '../smComponents/smNavbar/SmNavbar'
import SmNavPage from '../smComponents/smNavbar/SmNavPage'
import WeightCalories from '../smComponents/smPages/WeightCalories'
import SmSidebar from "../smComponents/smSide/SmSidebar"


const Plan = () => {
  return (
    <>
      {/* navbar section */}
      <section>
        <div> <SmNavbar/> </div>
      </section>

      {/* sidebar section */}

      <section>
        <div style = {{ backgroundColor:"rgb(240,240,240)"}}>
          <div><SmSidebar /></div>
          <div> <WeightCalories />  </div>
          
        </div>
        {/* <div><WeightCalories /></div> */}
        
      </section>

      {/* navpage section */}

      {/* <section>
        <div> <SmNavPage /> </div>
      </section> */}


    </>
  )
}

export default Plan