// src/components/Ingredient/Ingredient.jsx
const Ingredient = ({ ingredient, handleClick, buttonLabel }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={handleClick}>{buttonLabel}</button>
    </li>
  );
};

export default Ingredient;