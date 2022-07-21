import React from 'react'
import SmNavbar from '../smComponents/smNavbar/SmNavbar'
import SmNavPage from '../smComponents/smNavbar/SmNavPage'
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
        <div>
          <div> <SmSidebar /> </div>
        </div>
        
      </section>

      {/* navpage section */}

      <section>
        <div> <SmNavPage /> </div>
      </section>
    </>
  )
}

export default Plan