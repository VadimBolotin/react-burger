<<<<<<< HEAD
import style from './middleElement.module.css'
import Price from '../price/price';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

const MiddleElement = (props) => {
    return (
        <div>
            <div className={style.block} data-handker-id={props.handlerId}>
                <div className={style.center + ' pr-2'}>
                    <DragIcon type="primary" />
                </div>
                <div className={style.item + ' pl-6 pr-8'}>
                    <div className={style.img + ' pr-5'}>
                        <img src={props.thumbnail} alt="ингредиент"/>
                    </div>
                    <div className={style.center + ' pr-5'}>
                        <p className={style.min + " text text_type_main-default"}>
                            {props.text}
                        </p>
                    </div>
                    <div className={style.center + ' pr-5'}>
                        <Price count={props.price} elClass={'text text_type_main-default'}/>
                    </div>
                    <div className={style.center}>
                        <DeleteIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}
MiddleElement.propTypes = {
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
=======
import style from './middleElement.module.css'
import Price from '../price/price';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

const MiddleElement = (props) => {
    return (
        <div>
            <div className={style.block} data-handker-id={props.handlerId}>
                <div className={style.center + ' pr-2'}>
                    <DragIcon type="primary" />
                </div>
                <div className={style.item + ' pl-6 pr-8'}>
                    <div className={style.img + ' pr-5'}>
                        <img src={props.thumbnail} alt="ингредиент"/>
                    </div>
                    <div className={style.center + ' pr-5'}>
                        <p className={style.min + " text text_type_main-default"}>
                            {props.text}
                        </p>
                    </div>
                    <div className={style.center + ' pr-5'}>
                        <Price count={props.price} elClass={'text text_type_main-default'}/>
                    </div>
                    <div className={style.center}>
                        <DeleteIcon type="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}
MiddleElement.propTypes = {
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
>>>>>>> 7e17f8c (проверка)
export default MiddleElement