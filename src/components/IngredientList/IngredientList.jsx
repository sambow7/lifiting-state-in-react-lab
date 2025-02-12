// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return <ul>
    {/* List available ingredients */}
    {props.ingredients.map((ingredient) => (
      <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
      </li>
    ))}
  </ul>;// map through props.ingredients
};

export default IngredientList;
