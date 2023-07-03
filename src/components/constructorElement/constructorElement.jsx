import style from './constructorElement.module.css';
import TopElement from '../topElement/topElement'
import BottomElement from '../bottomElement/bottomElement';
import MiddleElement from '../middleElement/middleElement';
import PropTypes from 'prop-types';

const ConstructorElement = (props) => {
    return(
        <div className={style.container}>
            {props.type === 'bun' && props.position === 'top'
            ?
                <TopElement {...props}/>
            : props.type === 'bun' && props.position === 'bottom'
            ? 
                <BottomElement {...props}/>
            :
                <MiddleElement {...props} />
            }
        </div>
    )
}
ConstructorElement.propTypes = {
    type: PropTypes.string,
    position: PropTypes.string,
    isLocked: PropTypes.bool,
    text: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ])
}; 
export default ConstructorElement 