// src/components/IngredientList/IngredientList.jsx
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index} 
          ingredient={ingredient} 
          handleClick={() => addToBurger(ingredient)} 
          buttonLabel="+" 
        />
      ))}
    </ul>
  );
};

export default IngredientList;