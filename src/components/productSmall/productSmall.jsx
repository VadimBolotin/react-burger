import React from 'react';
import style from './productSmall.module.css'
import ConstructorElement from '../constructorElement/constructorElement';
import PropTypes from 'prop-types';

const ProductSmall = (props) => {
    const data = props.tovar;

    const buns = data.filter((item) => item.type === 'bun');
    const mains = data.filter((item) => item.type !== 'bun');

    return (
        <div>
            { buns.map((state, index)=>( 
                <div key={state._id} className={style.padding__top}>     
                    { index === 0
                    ? <ConstructorElement type="bun" position="top" isLocked={true} text={state.name + ' (верх)'} price={state.price} thumbnail={state.image_mobile} id={state._id} key={state._id}/>
                    : null
                    } 
                </div>    
            ))}
            <div className={style.scroll + ' custom-scroll'}>
            { mains.map((state, index)=>(  
                 <div key={state._id}>       
                    <ConstructorElement id={state._id} text={state.name} price={state.price} thumbnail={state.image_mobile} index={index} constructorId={state.constructorId} key={state.constructorId}/>         
                </div> 
            ))}
            </div>
            { buns.map((state, index)=>(  
                <div key={state._id} className={style.padding__bottom}>    
                    { index === 0
                    ? <ConstructorElement type="bun" position="bottom" isLocked={true} text={state.name + ' (низ)'} price={state.price} thumbnail={state.image_mobile} id={state.id} key={state._id}/>  
                    : null
                    } 
                </div>      
            ))}
        </div>
    )
}

ProductSmall.propTypes = {
    data: PropTypes.oneOfType([
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        thumbnail: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      }),
      PropTypes.array,
    ])
  };

export default ProductSmall;