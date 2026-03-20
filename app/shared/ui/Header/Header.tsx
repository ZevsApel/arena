'use client'

import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";

const Header = () => {

    const menuItems = [
        { text: 'Карта территории', link: '/' },
        { text: 'Услуги', link: '/' },
        { text: 'Виды номеров', link: '/' },
        { text: 'Контакты', link: '/' }
    ]

    const handleClick = () => {
        console.log('click');
    }

    return (
        <header className="header">
            <Logo />
            <Menu items={menuItems} />
            <Button text={"Бронирование"} variant="booking" onClick={handleClick} />
        </header>
    );
}

export default Header;