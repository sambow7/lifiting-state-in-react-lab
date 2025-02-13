// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients? STACK!</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient 
            key={index} 
            ingredient={ingredient} 
            handleClick={() => removeFromBurger(index)} 
            buttonLabel="X" 
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;