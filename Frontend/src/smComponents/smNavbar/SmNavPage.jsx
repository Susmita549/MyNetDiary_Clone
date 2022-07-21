import React from 'react'
import {Routes, Route} from "react-router-dom"
import WeightCalories from '../smPages/WeightCalories'
import FatCarbs from '../smPages/FatCarbs'
import Exercise from '../smPages/Exercise'

const SmNavPage = () => {
  return (
    <>
        <section>
            <Routes>
                <Route path = "/weightcalories" element = {<WeightCalories/>} />
                <Route path = "/fatcarbs" element = {  <FatCarbs/>} />
                <Route path = "/exercise" element = {  <Exercise/>} />
            </Routes>
        </section>
    </>
  )
}

export default SmNavPage