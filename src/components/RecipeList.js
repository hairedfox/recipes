import React from 'react'

const RecipeList = (props) => {
  return (
    <div style={props.style}>
      <h2>Recipes</h2>
      <ul>
        <li>
          <span>Creepy Halloween Skull Cupcakes</span>
          <span>Desert</span>
        </li>
        <li>
          <span>Creepy Halloween Skull Cupcakes</span>
          <span>Desert</span>
        </li>
        <li>
          <span>Creepy Halloween Skull Cupcakes</span>
          <span>Desert</span>
        </li>
        <li>
          <span>Creepy Halloween Skull Cupcakes</span>
          <span>Desert</span>
        </li>
      </ul>
    </div>
  )
}

export default RecipeList