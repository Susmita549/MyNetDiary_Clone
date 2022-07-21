import React from 'react'
import SM_WEIGHT_PLAN from "../smAssets/weight_plan.png"
import SM_MACROS_PLAN from "../smAssets/macros_plan.png"
import SM_EXERCISE_PLAN from "../smAssets/exercise_plan.png"
import SM_NUTR_PLAN from "../smAssets/nutr_plan.png"
import SM_CYCLING_PLAN from "../smAssets/cycling_plan.png"

export const SmSidebarData = [
    {
        id: "1",
        title:"Weight & Calories",
        icon:SM_WEIGHT_PLAN,
        path:"/weightplan"
    },
    {
        id: "2",
        title:"Fat,Carbs & Protein",
        icon:SM_MACROS_PLAN,
        path:"/macrosplan"
    },
    {
        id: "3",
        title:"Exercise Plan",
        icon:SM_EXERCISE_PLAN,
        path:"/exerciseplan"
    },
    {
        id: "4",
        title:"Nutrition Targets",
        icon:SM_NUTR_PLAN,
        path:"/nutrplan"
    },
    {
        id: "5",
        title:"Cycling",
        icon:SM_CYCLING_PLAN,
        path:"/cyclingplan"
    },
]

