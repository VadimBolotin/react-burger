import React from 'react';
import style from './App.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';

function App() {

  return(
    <>
      <AppHeader />
      <div >
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  )
}


export default App;
