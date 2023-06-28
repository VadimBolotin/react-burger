import React from 'react';
import style from './product.module.css';
import Price from '../price/price';
import PropTypes from 'prop-types';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const Product = (props) =>{

    return(
        <>
            <div key={props.id} onClick={props.onClick}  className={'item'}>
                <div className={'itemCount'}>
                {props.count &&
                        <Counter count={props.count} size="default" extraClass="m-1"/>
                    }
                    
                </div>
                <div className='mb-1 itemImg'>
                    <img src={props.image} />
                </div>
                <div className={'itemPrice mb-1 text text_type_digits-default'}>
                    {/* <div className='mr-2'>{props.price}</div>

                    <CurrencyIcon type="primary" /> */}
                    <Price count={props.price} elClass={'text text_type_main-medium '}/>
                </div>
                <h2 className={'itemName text text_type_main-default' }>
                    {props.name}
                </h2>
                
            </div>
        </>
    )
}

Product.propTypes = {
    image: PropTypes.string.isRequired,       
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    counter: PropTypes.number,
}; 

export default Product;