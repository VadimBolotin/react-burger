import React from 'react';
import style from './burgerConstructor.module.css';
import OrderDetails from '../orderDetails/orderDetails';
import Modal from "../modal/modal";
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ProductSmall from "../productSmall/productSmall";
import { useState } from "react";
import PropTypes from 'prop-types';
import { menuItemPropTypes } from '../../utils/contants';

const BurgerConstructor = (props) => {
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);

    const onSubmit = (data) => {  
        setIsOrderSuccess(isOrderSuccess === false ? true : false) 
    }
    const onClose = () => {
        setIsOrderSuccess(isOrderSuccess === false ? true : false)
    }
    return (
        <>
            <div className={'mt-25'}>
                <ProductSmall  tovar={props.data}/>
                <div className={style.price + ' mt-10'}>
                    <div className={style.numberPrice}>
                        <p className='text text_type_digits-medium pr-2'>610</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className='ml-10'>
                        <Button htmlType="button" type="primary" size="medium" onClick={onSubmit}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
            { 
                isOrderSuccess && 
                <Modal onClose={onClose}>
                    <OrderDetails />
                </Modal>
            }
            
        </>
    )
}
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(menuItemPropTypes)
};
export default BurgerConstructor;