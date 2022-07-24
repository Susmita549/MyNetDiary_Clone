import React from 'react'
import {useState} from "react"
import styles from "./WeightCalories.module.css"
import styled from "styled-components"
import SM_CAL1 from "../smAssets/cal1.png"
import SM_CAL2 from "../smAssets/cal3.png"

// const Bold = styled.p`
//     color:green
// `

const WeightCalories = () => {
  const [val1, setVal1] = useState("65 lb")
  const [val2, setVal2] = useState("60 lb")
  const [val3, setVal3] = useState("August 22, 2022")
  const [val4, setVal4] = useState("Losing 1.01 Ib per Week")
  const [val5, setVal5] = useState("1,155")
  const [val6, setVal6] = useState("Off")
  const [val7, setVal7] = useState("Minimum Calorie Budget")
  return (
   
    <>
       <div style = {{ marginLeft:"25%", marginTop:"-250px",width:"1000px",height:"1600PX"}} className={styles.middle__right}>
               <div  className={styles.heading}>
                    <p style={{marginLeft:"20px", fontSize:"15px"}}>I plan to lose 5 lb in 30 days by eating less than <span style ={{color:"rgb(108,202,135)", fontSize:"25px" }}>1,155 cals</span> daily.</p>
               </div>

               <div style = {{marginTop:"60px", marginLeft:"-478px"}} className={styles.middle__right__left}>
                <div className={styles.left__one}>
                    <h6 style = {{marginLeft:"-1px", textAlign:"left"}}>Current Weight</h6>
                    <input style = {{ marginLeft:"-200px"}} type="text" name="" value= {val1} onChange={(e)=>setVal1(e.target.value)} />
                </div>

                <div className={styles.left__two}>
                     <h6 style = {{marginLeft:"-1px", textAlign:"left"}}>Target Weight</h6>
                     <input style = {{ marginLeft:"-200px"}} type="text" name="" value= {val2} onChange={(e)=>setVal2(e.target.value)} />
               </div>

             <div className={styles.left__three}>
                 <h6 style = {{marginLeft:"-1px", textAlign:"left"}}>Target Date</h6>
                 <input style = {{ marginLeft:"-200px"}} type="text" name="" value= {val3} onChange={(e)=>setVal3(e.target.value)} />
             </div>

             <div className={styles.left__four}>
                 <h6 style = {{marginLeft:"-1px", textAlign:"left"}}>Weekly Rate</h6>
                 <input style = {{ marginLeft:"-200px"}} type="text" name="" value={val4} onChange={(e)=>setVal4(e.target.value)} />
             </div>

             <div style = {{ alignItems:"center", justifyContent:"center"}} className={styles.left__five}>
                <div style = {{alignItems:"center", display:"flex",justifyContent:"center", marginLeft:"-255px"}}>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/plan/budget_target.png" alt=""/>
                <h6 > Daily Food Calorie Budget</h6>
                </div>
                 <input type="text" name="" value={val5} onChange={(e)=>setVal5(e.target.value)}  style={{ marginLeft:"-200px",color: "orange", fontSize: "20px"}}/>
             </div>

             {/* <h5>MyNetDiary recommends 1,474 calories based on your
            <br/> weight target. <a href="#">Explain</a></h5> */}

            <input style = {{borderBottom:"1px solid black", marginLeft:"-198px", marginTop:"15px", color:"rgb(154,133,142)"}} type="text" name="" value={val7} onChange={(e)=>setVal7(e.target.value)} />
            <div style = {{display:"flex", alignItems:"center", marginTop:"8px"}}>
                <img style = {{width:"20px", height:"20px"}} src="https://www.mynetdiary.com/img/mui/icon_vcoach_warning.png" alt="" />
                <p style = {{fontSize:"16px", marginLeft:"5px"}}>Low Calorie Budget</p>
            </div>
            <p style ={{ fontSize:"14px", textAlign:"left", width:"400px", color:"gray", marginTop:"8px"}}>Your Calorie Budget is below 1,200, which might be too aggressive... <a style = {{color:"rgb(67,167,207)"}} href="https://www.mynetdiary.com/planning_weight_and_calories.html">Read article</a></p>

            <div style = {{}} className={styles.left__six}>
                 <div style = {{alignItems:"center", display:"flex",justifyContent:"center", marginLeft:"-355px"}}>
                    <img src="https://www.mynetdiary.com/img/mui/autopilot_off.png" alt=""/>
                    <h6>Auto Pilot</h6>
                 </div>
                 <input style = {{ marginLeft:"-200px", marginTop:"-300px"}} type="text" name="" value={val6} onChange={(e)=>setVal6(e.target.value)}  />
            </div>

            <div className={styles.recommend}>
                <h5 style ={{color:"rgb(67,167,207)", textAlign:"left",marginLeft:"-10px"}}>RECOMMEND</h5>
            </div>

            <div className={styles.contact}>
                <div style ={{display:"flex", alignItems:"center", marginLeft:"-10px", marginTop:"30px"}}>
                <img src="https://www.mynetdiary.com/img/mui/icon_profile_male.png" alt=""/>
                <span>Personal Info</span> <br/>
                </div>
               
                <p style ={{fontSize:"16px", marginLeft:"-40px"}}>male, 5'10", sedentary activity level, born on jun 22, 1998</p>
            </div>

                 <div className={styles.flag}>
                 <h6 style ={{textAlign:"left", marginLeft:"-2px", marginTop:"30px"}}>Weight Progress</h6>
                    <div style ={{display:"flex", alignItems:"center", marginLeft:"-10px", marginTop:"20px"}} >
                    <img src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png" alt=""/>
                    <span style ={{fontSize:"16px", marginLeft:'10px'}}>Maintained weight in 1 day since July 22</span>
                    
                    </div>

                    <div style ={{display:"flex"}}>
                        <h5 style= {{fontSize:"14px"}}>SHOW WEIGHT CHART</h5>
                        <h5 style= {{fontSize:"14px"}}>FRESH START</h5>
                    </div>

                 </div>
                 
            </div>
                
            <div className={styles.middle__right__right}>
                <img style={{marginLeft:"100px", width:"500px", marginTop:"-20px"}} src={SM_CAL1} alt=""/>
            </div>
            </div>
            <img style ={{width:"990px", height:"600px", marginTop:"-650px", marginLeft:"25%", backgroundColor:"rgb(240,240,240)"}} src={SM_CAL2} alt="" />
        
    </>
    
  )
}

export default WeightCalories