import React from 'react'

const MealPage = ({ params }) => {
  return (
    <h1>MealPage for meal: {params.slug}</h1>
  )
}

export default MealPage