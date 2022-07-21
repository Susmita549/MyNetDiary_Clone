import React from 'react'
import "./SmSidebar.css"
import {SmSidebarData} from "./SmSidebarData"
import {NavLink} from "react-router-dom"

const SmSidebar = () => {
  return (
    <>
      <section>
        <div className = "Sidebar">
          {SmSidebarData.map((elem)=>{
            return(
              <>
               <div key = {elem.id} >
               <NavLink to = {elem.path} className = "row">
                  <div className = "img-icon">
                    <img src = {elem.icon} className = "icon-style"  />
                  </div>
                  <div className = "titleDiv">
                    <p className = "titleP">{elem.title}</p>
                  </div>
                </NavLink>
               </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default SmSidebar