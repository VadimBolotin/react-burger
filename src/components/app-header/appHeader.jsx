import style from './appHeader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
        return(
            <header className={style.header + " p-4"}>
            <div className={style.header__box}>
                <a href='#' className={style.item + " pl-5 pr-5 pb-5 pt-5"}>
                    <div className="pr-2"><BurgerIcon type="primary" /></div>
                    <p className="text text_type_main-default">Конструктор</p>
                </a>
                <a href='#' className={style.item + " pl-5 pr-5 pb-5 pt-5 text_color_inactive"}>
                    <div className="pr-2"><ListIcon type="secondary"/></div>
                    <p className="text text_type_main-default">Лента заказов</p>
                </a>
            </div>
            <div className={style.logo + " pl-5 pr-5 pb-5 pt-5"}>
                <Logo />
            </div>
            <a href="#" className={style.profile + " pl-5 pr-5 pb-5 pt-5 text_color_inactive"}>
                <div className="pr-2">
                    <ProfileIcon type="secondary" />
                </div>                 
                <p className="text text_type_main-default">
                    Личный кабинет
                </p>
            </a>
</header>
        )
}

export default AppHeader;