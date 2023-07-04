import React from 'react';
import { useEffect, useState }  from 'react';
import style from './App.module.css';
import AppHeader from '../app-header/appHeader';
import BurgerIngredients from '../burger-ingredients/burgerIngredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';
import { menuItemPropTypes } from '../../utils/contants';

function App() {

  const [state, setState] = useState({ 
    productData: [],
    loading: true
  });
  const url = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    const getProductData = async () => {
      try {
        setState({...state, loading: true});
        const res = await fetch(`${url}`);
        if (!res.ok) {
          throw new Error('Ответ сети был не ok.');
        }
        const data = await res.json();
        setState({ productData: data.data, loading: false });
      }
      catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error)
      }        
    };
    getProductData();
  }, [])

  return(
    <>
      <AppHeader />
      <div className={style.box}>
        <BurgerIngredients data={state.productData}/>
        <BurgerConstructor data={state.productData}/>
      </div>
    </>
  )
}

App.propTypes = {
  productData: menuItemPropTypes
};

export default App;
