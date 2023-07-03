import style from './bottomElement.module.css';
import Price from '../price/price';
import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const BottomElement = (props) => {
    const elem = props.id !== false 
    ?   <>
            <div className="pr-5">
                <img src={props.thumbnail} alt="нижняя булочка"/>
            </div>
            <div className={ style.name + " pr-5"}>
                <p className="text text_type_main-default">
                    {props.text}.
                </p>
            </div>
            <div className={style.icon + ' pr-5'}>
                <Price count={props.price} elClass={'text text_type_main-default'}/>
            </div>
            <div className={ style.icon }>
                <LockIcon type="secondary" />
            </div>
        </>
    : <div className={style.non_item}></div>
    return ( 
        <div className={style.item + " ml-8 pl-6 pr-8"}>{elem}</div>       
        
    )
}
BottomElement.propTypes = {
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    position: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}; 
export default BottomElement