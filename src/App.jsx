import './App.css';
import { useState } from 'react';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Pickles', color: 'green' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Jalapeno', color: 'darkgreen' },
    { name: 'Mushrooms', color: '#7A6955' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
    { name: 'Mozzarella Cheese', color: '#FDE18B' },
    { name: 'Ketchup', color: '#d81616' },
    { name: 'Mayo', color: '#ffffee' },
    { name: 'Mustaaard!!', color: '#e1ad01' },

  ];

  const [stack, setStack] = useState([]);
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]); // Adds to the end
  };

  // Note: This does not preserve the order of ingredients in the stack

  // To preserve the order, use the filter method instead of slice and spread syntax:

  // const removeFromBurger = (index) => {
  //   setStack(stack.filter((_, i) => i!== index));
  // };

  // To preserve the order, use the slice method with spread syntax:

  // const removeFromBurger = (index) => {
  //   setStack([...stack.slice(0, index),...stack.slice(index + 1)]);
  // };

  const removeFromBurger = (index) => {
    setStack(stack.map((item, i) => (i === index ? null : item)).filter(Boolean));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;