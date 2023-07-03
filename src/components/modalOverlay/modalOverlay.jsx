<<<<<<< HEAD

import styles from './modalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    
    return (
            <div className={styles.block} onClick={props.handleCloseModal}>           
            </div>
    )
}

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired
};

=======

import styles from './modalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
    
    return (
            <div className={styles.block} onClick={props.handleCloseModal}>           
            </div>
    )
}

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired
};

>>>>>>> 7e17f8c (проверка)
export default ModalOverlay