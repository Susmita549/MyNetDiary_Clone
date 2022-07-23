import React, {useState, useEffect} from 'react'
import "./SmFoodNew.css"
import {FaSearch, FaStar} from "react-icons/fa"
import Select from "react-select"

var breakfastItems = [];

const SmFoodNew = () => {
    var breakfast = [
        {
            id:0,
            label:"Orange juice",
            calories:112,
            protien:10,
            fats:4,
            fdgrd:"A+",
            carbs:26
            
        },
        {
            id:1,
            label:"Boiled Eggs",
            calories:91,
            protien:14,
            fats:8,
            fdgrd:"A+",
            carbs:20,
            
        },
        {
            id:2,
            label:"Oats",
            calories:120,
            protien:37,
            fats:2,
            fdgrd:"A",
            carbs:80
        },
        {
            id:3,
            label:"Omlet",
            calories:91,
            protien:60,
            fats:3.5,
            fdgrd:"B+",
            carbs:50
        }
    ];
    var lunch = [
    {
            id:0,
            label:"Apple",
            calories:82,
            protien:0.4,
            fats:0.2,
            fdgrd:"A+",
            carbs:84
        },
        {
            id:1,
            label:"Chicken ",
            calories:91,
            protien:37,
            fats:8,
            fdgrd:"A+",
            carbs:30
        },
        {
            id:2,
            label:"Potatoes baked",
            calories:120,
            protien:15.6,
            fats:16,
            fdgrd:"A",
            carbs:90
        },
        {
            id:3,
            label:"Boiled Rice",
            calories:91,
            protien:10,
            fats:4,
            fdgrd:"A+",
            carbs:26
        }
    ];
    var dinner = [
    {
            id:0,
            label:"Pulses",
            calories:102,
            protien:120,
            fats:0.3,
            fdgrd:"A+",
            carbs:12
        },
        {
            id:1,
            label:"Veggies",
            calories:126,
            protien:40,
            fats:0.4,
            fdgrd:"A+",
            carbs:26
        },
        {
            id:2,
            label:"Baked Chicken",
            calories:120,
            protien:37,
            fats:6,
            fdgrd:"A",
            carbs:40
        },
        {
            id:3,
            label:"Chicken Salad",
            calories:91,
            protien:110,
            fats:4,
            fdgrd:"A+",
            carbs:20
        }
    ];
    var snacks = [
    {
            id:0,
            label:"Protien shake",
            calories:12,
            protien:115,
            fats:0.4,
            fdgrd:"A+",
            carbs:6
        },
        {
            id:1,
            label:"Scrambled Eggs",
            calories:81,
            protien:90,
            fats:0.4,
            fdgrd:"A+",
            carbs:36
        },
        {
            id:2,
            label:"Fruit Salad ",
            calories:120,
            protien:37,
            fats:4,
            fdgrd:"A",
            carbs:40
        },
        {
            id:3,
            label:"Pizza",
            calories:91,
            protien:30,
            fats:64,
            fdgrd:"C",
            carbs:260
        }
    ];
    const [brkItem, setBrkItem] = useState(breakfast.label)
    const [brkcalories, setBrkCalories] = useState(breakfast.calories)
    const [brkprotien, setBrkProtien] = useState(breakfast.protien)
    const [brkfat, setBrkFat] = useState(breakfast.fats)
    const [brkfdgrd, setBrkFdgrd] = useState(breakfast.fdgrd)
    const [brkcarbs, setBrkCarbs] = useState(breakfast.carbs)
    const [totalCal, setTotalCal] = useState(0)
    const [totalFat, setTotalFat] = useState(0)
    const [totalCarbs, setTotalCarbs] = useState(0)
    const [totalProtien, setTotalProtien] = useState(0)

    console.log(breakfastItems)
    // const breakfastHandler = e =>{
    //     setBrkItem(e.label)
    //     setBrkCalories(e.calories)
    //     setBrkProtien(e.protien)
    //     setBrkFat(e.fats)
    //     setBrkFdgrd(e.fdgrd)
    //     setBrkCarbs(e.carbs)
    // }
    // useEffect(()=>{
    //     const brkData = localStorage.getItem("breakfastItems");
    //     if(brkData){
    //         setBrkItem(JSON.parse(brkData))
    //         setBrkCalories(JSON.parse(brkData))
    //         setBrkProtien(JSON.parse(brkData))
    //         setBrkFat(JSON.parse(brkData))
    //         setBrkFdgrd(JSON.parse(brkData))
    //         setBrkCarbs(JSON.parse(brkData))
    //     }
    // }, []);

    // useEffect(()=>{
    //     localStorage.setItem("breakfastItems",JSON.stringify(brkItem,brkcalories,brkprotien,brkfat,brkfdgrd,brkcarbs))
    // })


    const breakfastHandler = (e)  =>{

        var brklist = []
        setBrkItem(e.label)
        setBrkCalories(e.calories)
        setBrkProtien(e.protien)
        setBrkFat(e.fats)
        setBrkFdgrd(e.fdgrd)
        setBrkCarbs(e.carbs)
        console.log(e)
        brklist.push(e.calories);
        brklist.push(e.fats);
        breakfastItems.push(brklist)
        console.log(breakfastItems)
        
        // breakfastItems.push(breakfastSingle)
        
        localStorage.setItem("breakfastlist", JSON.stringify(breakfastItems))
        setTotalCal(totalCal + e.calories)
        setTotalFat(totalFat + e.fats)
        setTotalCarbs(totalCarbs + e.carbs)
        setTotalProtien(totalProtien + e.protien)
    }

    const btnAdd = (e)=>{
      
    }

    const [lunchItem, setlunchItem] = useState(lunch.label)
    const [lunchcalories, setlunchCalories] = useState(lunch.calories)
    const [lunchprotien, setlunchProtien] = useState(lunch.protien)
    const [lunchfat, setlunchFat] = useState(lunch.fats)
    const [lunchfdgrd, setlunchFdgrd] = useState(lunch.fdgrd)
    const [lunchcarbs, setlunchCarbs] = useState(lunch.carbs)
    const lunchHandler = e =>{
        var lunchlist = []
        setlunchItem(e.label)
        setlunchCalories(e.calories)
        setlunchProtien(e.protien)
        setlunchFat(e.fats)
        setlunchFdgrd(e.fdgrd)
        setlunchCarbs(e.carbs)
        console.log(e)
        lunchlist.push(e.calories);
        lunchlist.push(e.fats);
        breakfastItems.push(lunchlist)
        console.log(breakfastItems)
localStorage.setItem("breakfastlist", JSON.stringify(breakfastItems))
setTotalCal(totalCal + e.calories)
setTotalFat(totalFat + e.fats)
        setTotalCarbs(totalCarbs + e.carbs)
        setTotalProtien(totalProtien + e.protien)
    }
    const [dinnerItem, setdinnerItem] = useState(dinner.label)
    const [dinnercalories, setdinnerCalories] = useState(dinner.calories)
    const [dinnerprotien, setdinnerProtien] = useState(dinner.protien)
    const [dinnerfat, setdinnerFat] = useState(dinner.fats)
    const [dinnerfdgrd, setdinnerFdgrd] = useState(dinner.fdgrd)
    const [dinnercarbs, setdinnerCarbs] = useState(dinner.carbs)
    const dinnerHandler = e =>{
        setdinnerItem(e.label)
        setdinnerCalories(e.calories)
        setdinnerProtien(e.protien)
        setdinnerFat(e.fats)
        setdinnerFdgrd(e.fdgrd)
        setdinnerCarbs(e.carbs)
        console.log(e)
        var dinnerlist = []
        dinnerlist.push(e.calories);
        dinnerlist.push(e.fats);
        breakfastItems.push(dinnerlist)
        console.log(breakfastItems)
localStorage.setItem("breakfastlist", JSON.stringify(breakfastItems))
setTotalCal(totalCal + e.calories)
setTotalFat(totalFat + e.fats)
        setTotalCarbs(totalCarbs + e.carbs)
        setTotalProtien(totalProtien + e.protien)
    }
    const [snacksItem, setsnacksItem] = useState(snacks.label)
    const [snackscalories, setsnacksCalories] = useState(snacks.calories)
    const [snacksprotien, setsnacksProtien] = useState(snacks.protien)
    const [snacksfat, setsnacksFat] = useState(snacks.fats)
    const [snacksfdgrd, setsnacksFdgrd] = useState(snacks.fdgrd)
    const [snackscarbs, setsnacksCarbs] = useState(snacks.carbs)
    const snacksHandler = e =>{
        setsnacksItem(e.label)
        setsnacksCalories(e.calories)
        setsnacksProtien(e.protien)
        setsnacksFat(e.fats)
        setsnacksFdgrd(e.fdgrd)
        setsnacksCarbs(e.carbs)
        console.log(e)
        var dinnerlist = []
        dinnerlist.push(e.calories);
        dinnerlist.push(e.fats);
        breakfastItems.push(dinnerlist)
        console.log(breakfastItems)
localStorage.setItem("breakfastlist", JSON.stringify(breakfastItems))
setTotalCal(totalCal + e.calories)
setTotalFat(totalFat + e.fats)
        setTotalCarbs(totalCarbs + e.carbs)
        setTotalProtien(totalProtien + e.protien)
    }
    const colorStyles ={
        control: (styles) =>({...styles,width:"150px", height:"18px",backgroundColor:"rgb(232,245,233)"}),
        option : (styles,{data, isDisabled, isFocused,isSelected})=>{
            return {...styles}
        }
    }
    console.log(totalCal)
    console.log(totalFat)
    console.log(totalCarbs)
    console.log(totalProtien)
    localStorage.setItem("totalcal", JSON.stringify(totalCal))
    localStorage.setItem("totalfat", JSON.stringify(totalFat))
    localStorage.setItem("totalcarbs", JSON.stringify(totalCarbs))
    localStorage.setItem("totalprotien", JSON.stringify(totalProtien))
  return (
    <>
    <div className="main">
        <div className="top">
            <FaSearch style ={{fontSize:"24px", color:"grey",margin:"30px 10px 10px 20px"}} />
            <FaStar style = {{fontSize:"24px", color:"grey",margin:"30px 10px 10px 20px"}} />
            <img  className="img" src="https://s3.amazonaws.com/img.mynetdiary.com/premiumrecipe/ic_premium_recipes.png" style = {{height:"24px", width:"24px"}}  />
            
            <p className="cmd">Consumed Food</p>
            <p className="cl">Calories count</p>
            <p className="ft">Fats</p>
            <p className="ptn">Protien</p>
            <p className="fdg">Fd Grade</p>
            <p className="cbs">Carbs</p>
        </div>
        <div className="brkfst">
            <p className="p1">BREAKFAST</p><br/>
            <Select className = "selStyles" styles = {colorStyles} onChange = {breakfastHandler} options = {breakfast} />
            {/* <button id="btn1">ADD</button> */}
            <div className="inr" id="inr">
                <h1 style = {{margin:"30px -40px 0px 30px", height:"30px", width:"150px"}}>{brkItem}</h1>
                <h1 style = {{margin:"30px -40px 0px 180px"}}>{brkcalories}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{brkfat}</h1>
                <h1 style = {{margin:"30px -40px 0px 140px"}}>{brkprotien}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{brkfdgrd}</h1>
                <h1 style = {{margin:"30px -40px 0px 150px"}}>{brkcarbs}</h1>
            </div>
        </div>
        <br />
        <br />
        <div className="brkfst">
            <p className="p1">LUNCH</p>
            <Select className = "selStyles" styles = {colorStyles} onChange = {lunchHandler} options = {lunch} />
            {/* <button id="btn1">ADD</button> */}
            <div className="inr" id="inr">
                <h1 style = {{margin:"30px -40px 0px 30px", height:"30px", width:"150px"}}>{lunchItem}</h1>
                <h1 style = {{margin:"30px -40px 0px 180px"}}>{lunchcalories}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{lunchfat}</h1>
                <h1 style = {{margin:"30px -40px 0px 140px"}}>{lunchprotien}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{lunchfdgrd}</h1>
                <h1 style = {{margin:"30px -40px 0px 150px"}}>{lunchcarbs}</h1>
            </div>
        </div>
         <br />
        <br />

        <div className="brkfst">
            <p className="p1">DINNER</p>
            <Select className = "selStyles" styles = {colorStyles} onChange = {dinnerHandler} options = {dinner} />
            {/* <button id="btn1">ADD</button> */}
            <div className="inr" id="inr">
                <h1 style = {{margin:"30px -40px 0px 30px", height:"30px", width:"150px"}}>{dinnerItem}</h1>
                <h1 style = {{margin:"30px -40px 0px 180px"}}>{dinnercalories}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{dinnerfat}</h1>
                <h1 style = {{margin:"30px -40px 0px 140px"}}>{dinnerprotien}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{dinnerfdgrd}</h1>
                <h1 style = {{margin:"30px -40px 0px 150px"}}>{dinnercarbs}</h1>
            </div>
        </div>
         <br />
        <br />
        <div className="brkfst">
            <p className="p1">SNACKS</p>
            <Select className = "selStyles" styles = {colorStyles} onChange = {snacksHandler} options = {snacks} />
            {/* <button id="btn1">ADD</button> */}
            <div className="inr" id="inr">
                <h1 style = {{margin:"30px -40px 0px 30px", height:"30px", width:"150px"}}>{snacksItem}</h1>
                <h1 style = {{margin:"30px -40px 0px 180px"}}>{snackscalories}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{snacksfat}</h1>
                <h1 style = {{margin:"30px -40px 0px 140px"}}>{snacksprotien}</h1>
                <h1 style = {{margin:"30px -40px 0px 170px"}}>{snacksfdgrd}</h1>
                <h1 style = {{margin:"30px -40px 0px 150px"}}>{snackscarbs}</h1>
            </div>
        </div>
        {/* <div className="graph" >
            <button id= "grf">SHOW GRAPH</button>
            <div id="chartContainer" style={{height: "300px", width: "40%"}}></div>
            <button id="total"> TOTAL</button>
            <div className="brkfst1" id="brkfst1">
                <p>DAY LOG</p>
            </div>
        </div> */}
        <div>
            Total Calories:{totalCal}
        </div>
   </div>
    </>
  )
}

export default SmFoodNew