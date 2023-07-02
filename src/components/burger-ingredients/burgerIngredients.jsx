import { useState } from "react";
import style from './burgerIngredients.modal.css';
import IngredientDetails from '../ingredientDetails/ingredientDetails'
import Modal from "../modal/modal";
import TabElements from "../TabElements/TabElements";
import Product from "../product/product";
import data from '../../utils/data';


const BurgerIngredients = () => {
    const [ingredient, setIngredient] = useState({})
    const [isIngredientsViews, setIsIngredientsViews] = useState(false);

    const buns = data.filter((item) => item.type === 'bun');
    const sauce = data.filter((item) => item.type === 'sauce');
    const main = data.filter((item) => item.type === 'main');
    
    const onSubmit = (data) => {  
        setIsIngredientsViews(isIngredientsViews === false ? true : false)   
        setIngredient(
            { 
                image_large: data.image_large,
                name: data.name,
                calories: data.calories,
                proteins: data.proteins,
                fat: data.fat,
                carbohydrates: data.carbohydrates
            }
        )
        console.log(isIngredientsViews)
        console.log(ingredient)   
    }
    

    const onClose = () => {
        setIsIngredientsViews(isIngredientsViews === false ? true : false) 
        setIngredient({})
    }


    return (
        <div className='mr-10'>
            <div className="mt-10 mb-5">
                <p className='text text_type_main-large'>Соберите бургер</p>
            </div>
            <TabElements />
            <div className={'scroll custom-scroll'}>
                <div className="mb-6 mt-10" >
                    <p className="text text_type_main-medium" id="bun">
                        Булки
                    </p>
                </div> 
                <div className={'box mt-6 mb-10 ml-4'}>
                    { buns.map((data, index)=>(                    
                        <Product onClick={() => onSubmit(data)} name={data.name} count={data.count} id={data._id} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id} className={'elemen'}/>                     
                    ))}
                </div> 
                <div className="mb-6 mt-10" >
                    <p className="text text_type_main-medium" id="bun">
                        Соусы
                    </p>
                </div> 
                <div className={'box mt-6 mb-10 ml-4'}>
                    { sauce.map((data, index)=>(                    
                        <Product onClick={() => onSubmit(data)} name={data.name} count={data.count} id={data._id} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id}/>                     
                    ))}
                </div> 
                <div className="mb-6 mt-10" >
                    <p className="text text_type_main-medium" id="bun">
                    Начинки
                    </p>
                </div> 
                <div className={'box mt-6 mb-10 ml-4'}>
                    { main.map((data, index)=>(                    
                        <Product onClick={() => onSubmit(data)} name={data.name} count={data.count} id={data._id} image_mobile={data.image_mobile} price={data.price} type={data.type} image={data.image} key={data._id}/>                     
                    ))}
                </div>
                
            </div>
            {
                isIngredientsViews && (
                    <Modal headerText={"Детали ингридиента"} onClose={onClose}>
                        <IngredientDetails state={ingredient}/>
                    </Modal>
                )
            }
            
        </div>
        
    )
}

export default BurgerIngredients;