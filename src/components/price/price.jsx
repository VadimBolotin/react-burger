import style from './price.module.css';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

const Price = (props) => {

    return (
        <div className={style.center}>
            <p className={props.elClass + ' pr-2'}>{props.count}</p>
            <CurrencyIcon type="primary" className={props.elClass} />
        </div>
    )
}

Price.propTypes = {
    count: PropTypes.number.isRequired,
    elClass: PropTypes.string.isRequired
}; 
export default Price;