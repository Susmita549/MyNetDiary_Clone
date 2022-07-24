import React from 'react'
import styles from "./SmSidebar.module.css"
import {SmSidebarData} from "./SmSidebarData"
import {NavLink} from "react-router-dom"

const SmSidebar = () => {
  return (
    <>
      <section>
        <div className = {styles.Sidebar}>
          {SmSidebarData.map((elem)=>{
            return(
              <>
               <div key = {elem.id} >
               <NavLink to = {elem.path}  className = {styles.row}>
                  <div className = {styles.imgIcon}>
                    <img src = {elem.icon} className = {styles.iconStyle}  />
                  </div>
                  <div className = {styles.titleDiv}>
                    <p className = {styles.titleP}>{elem.title}</p>
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