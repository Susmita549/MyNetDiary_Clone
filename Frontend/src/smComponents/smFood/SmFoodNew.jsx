import React from 'react'
import "./SmFoodNew.css"
import {FaSearch, FaStar} from "react-icons/fa"

const SmFoodNew = () => {
  return (
    <>
    <div class="main">
        <div class="top">
            <FaSearch style ={{fontSize:"24px", color:"grey",margin:"30px 10px 10px 20px"}} />
            <FaStar style = {{fontSize:"24px", color:"grey",margin:"30px 10px 10px 20px"}} />
            <img  className="img" src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png" style = {{height:"24px", width:"24px"}}  />
            
            <p className="cmd">Consumed Food:</p>
            <p className="cl">Calories count</p>
            <p className="ft">Fats</p>
            <p className="ptn">Protien</p>
            <p className="fdg">Fd Grade</p>
            <p className="cbs">Carbs</p>
        </div>
        <div className="brkfst">
            <p className="p1">BREAKFAST</p><br/>
            <select className="brk" id= "brk">
                <option className="op"id="op1"></option>
                <option className="op" id="op2"></option>
                <option className="op"id="op3"></option>
                <option className="op" id="op4"></option>
            </select>
            <button id="btn1">ADD</button>
            <div className="inr" id="inr">

            </div>
        </div>

        <div className="top">
            <p className="cmd1">Consumed Food:</p>
            <p className="cl">Calories count</p>
            <p className="ft">Fats</p>
            <p className="ptn">Protien</p>
            <p className="fdg">Fd Grade</p>
            <p className="cbs">Carbs</p>
        </div>
        <div className="brkfst">
            <p className="p1">LUNCH</p>
            <select className="brk1" id= "lnc">
                <option  className="op" id="op5"></option>
                <option  className="op" id="op6"></option>
                <option  className="op" id="op7"></option>
                <option  className="op" id="op8"></option>

            </select>
            <button id="btn2">ADD</button>
            <div className="inr" id="inr1">

            </div>Name
        </div>
        <div className="top">
            <p className="cmd1">Consumed Food:</p>
            <p className="cl">Calories count</p>
            <p className="ft">Fats</p>
            <p className="ptn">Protien</p>
            <p className="fdg">Fd Grade</p>
            <p className="cbs">Carbs</p>
        </div>


        <div className="brkfst">
            <p className="p1">DINNER</p>
            <select className="brk1" id= "dnr">
                <option className="op" id="op9"></option>
                <option className="op" id="op10"></option>
                <option className="op" id="op11"></option>
                <option className="op" id="op12"></option>

            </select>
            <button id="btn3">ADD</button>
            <div className="inr" id="inr2">

            </div>
        </div>
        <div className="top">
            <p className="cmd1">Consumed Food:</p>
            <p className="cl">Calories count</p>
            <p className="ft">Fats</p>
            <p className="ptn">Protien</p>
            <p className="fdg">Fd Grade</p>
            <p className="cbs">Carbs</p>
        </div>
        <div className="brkfst">
            <p className="p1">SNACKS</p>
            <select className="brk1" id= "snc">
                <option className="op" id="op13"></option>
                <option  className="op" id="op14"></option>
                <option className="op" id="op15"></option>
                <option  className="op" id="op16"></option>

            </select>
            <button id="btn4">ADD</button>
            <div class="inr" id="inr3">

            </div>
        </div>
        <div className="graph" >
            <button id= "grf">SHOW GRAPH</button>
            <div id="chartContainer" style={{height: "300px", width: "40%"}}></div>
            <button id="total"> TOTAL</button>
            <div className="brkfst1" id="brkfst1">
                <p>DAY LOG</p>
            </div>
        </div>
   </div>
    </>
  )
}

export default SmFoodNew