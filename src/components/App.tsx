import React from 'react';
// import './reset.css';
import style from './App.module.css';
import AppHeader from './app-header/appHeader';
import BurgerIngredients from './burger-ingredients/burgerIngredients';
import BurgerConstructor from './burger-constructor/burgerConstructor';

function App() {
  return(
    <>
      <AppHeader />
      <div className={style.box}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  )
}


export default App;
