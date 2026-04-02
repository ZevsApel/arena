import { MenuContainerProps } from "./Menu.type";


const Menu = ({ items }: MenuContainerProps) => {
    return (
        <nav className="top-menu">
            <ul className="top-menu__list">
                {items.map((item, index) => (
                    <li className="top-menu__item" key={index}>
                        <a className="top-menu__link" href={item.link}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;