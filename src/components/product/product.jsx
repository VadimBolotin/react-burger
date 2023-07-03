<<<<<<< HEAD
import React from 'react';
import Price from '../price/price';
import PropTypes from 'prop-types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const Product = (props) =>{

    return(
        <>
            <div onClick={props.onClick}  className={'item'}>
                <div className={'itemCount'}>
                {props.count &&
                        <Counter count={props.count} size="default" extraClass="m-1"/>
                    }
                    
                </div>
                <div className='mb-1 itemImg'>
                    <img src={props.image} />
                </div>
                <div className={'itemPrice mb-1 text text_type_digits-default'}>

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

=======
import React from 'react';
import Price from '../price/price';
import PropTypes from 'prop-types';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

const Product = (props) =>{

    return(
        <>
            <div onClick={props.onClick}  className={'item'}>
                <div className={'itemCount'}>
                {props.count &&
                        <Counter count={props.count} size="default" extraClass="m-1"/>
                    }
                    
                </div>
                <div className='mb-1 itemImg'>
                    <img src={props.image} />
                </div>
                <div className={'itemPrice mb-1 text text_type_digits-default'}>

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

>>>>>>> 7e17f8c (проверка)
export default Product;