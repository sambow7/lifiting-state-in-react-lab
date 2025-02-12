// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return <ul>
    {/* Stack ingredients */}
    {props.ingredients.map((ingredient) => (
      <li key={ingredient.name}>
        <span style={{ backgroundColor: ingredient.color }}>{ingredient.name}</span>
      </li>
    ))}
  </ul>;// map through props.ingredients
};

export default BurgerStack;
