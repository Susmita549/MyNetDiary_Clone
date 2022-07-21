import React from 'react'
import {useState} from "react"
import "./WeightCalories.css"

const WeightCalories = () => {
  const [val1, setVal1] = useState("214.5 lb")
  const [val2, setVal2] = useState("200 lb")
  const [val3, setVal3] = useState("July 20, 2022")
  const [val4, setVal4] = useState("Losing 1.01 Ib per Week")
  const [val5, setVal5] = useState("1,481")
  const [val6, setVal6] = useState("Off")
  return (
   
    <>
       <div className="middle__right">
               <div className="heading">
                    <p>I plan to lose 10 lb in 69 days by eating less than  1,481cals daily.</p>
               </div>

               <div className="middle__right__left">
                <div className="left__one">
                    <h6>Current Weight</h6>
                    <input type="text" name="" value= {val1} onChange={(e)=>setVal1(e.target.value)} />
                </div>

                <div className="left__two">
                     <h6>Target Weight</h6>
                     <input type="text" name="" value= {val2} onChange={(e)=>setVal2(e.target.value)} />
               </div>

             <div className="left__three">
                 <h6>Target Date</h6>
                 <input type="text" name="" value= {val3} onChange={(e)=>setVal3(e.target.value)} />
             </div>

             <div className="left__four">
                 <h6>Weekly Rate</h6>
                 <input type="text" name="" value={val4} onChange={(e)=>setVal4(e.target.value)} />
             </div>

             <div className="left__five">
                 <h6><img src="https://s3.amazonaws.com/img.mynetdiary.com/plan/budget_target.png" alt=""/> Daily Food Calorie Budget</h6>
                 <input type="text" name="" value={val5} onChange={(e)=>setVal5(e.target.value)}  style={{color: "green", fontSize: "20px"}}/>
             </div>

             <h5>MyNetDiary recommends 1,474 calories based on your
            <br/> weight target. <a href="#">Explain</a></h5>

            <div className="left__six">
                 <h6><img src="https://www.mynetdiary.com/img/mui/autopilot_off.png" alt=""/>Auto Pilot</h6>
                 <input type="text" name="" value={val6} onChange={(e)=>setVal6(e.target.value)}  />
            </div>

            <div className="recommend">
                <h5>RECOMMEND</h5>
            </div>

            <div className="contact">
                <img src="https://www.mynetdiary.com/img/mui/icon_profile_male.png" alt=""/>
                <span>Personal Info</span> <br/>
                <h5>
                 male, 5'10", sedentary activity level, born on jun 22, 1998</h5>
            </div>

                 <div className="flag">
                     <h6>Weight Progress</h6>

                     <img src="https://s3.amazonaws.com/img.mynetdiary.com/plan/weight_plan.png" alt=""/>
                     <span>Maintained weight in 1 day since Dec 29.</span>

                     <h5>SHOW WEIGHT CHART    FRESH START</h5>

                 </div>
            </div>

            <div className="middle__right__right">
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/help/android/screenshots/budget.png" alt=""/>
            </div>
            </div>
        
    </>
    
  )
}

export default WeightCalories