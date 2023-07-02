import style from './topElement.module.css'
import Price from '../price/price';
import { LockIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


const TopElement = (props) => {
    const elem = props.id !== false
    ? <>
        <div className='pr-5'>
            <img src={props.thumbnail} alt='верхяя булочкa'/>
        </div>
        <div className={style.item + ' pr-5'}>
            <p className='text text_type_main-default'>
                {props.text}
            </p>
        </div>
        <div className={style.center + " pr-5"}>
                <Price count={props.price} elClass={'text text_type_main-default'}/>
        </div>
        <div className={style.center}>
            <LockIcon type="secondary" />
        </div>
    </>
    : <div className={style.non_item}></div>

    return (
        <div className={style.box + " ml-8 pl-6 pr-8"}>
            {elem}
        </div>
    )
}
TopElement.propTypes = {
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
export default TopElement