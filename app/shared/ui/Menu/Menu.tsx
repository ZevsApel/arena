import { MenuContainerProps } from "./Menu.type";


const Menu = ({ items }: MenuContainerProps) => {
    return (
        <nav className="top-menu">
            <ul className="top-menu-list">
                {items.map((item, index) => (
                    <li className="menu-list-item" key={index}>
                        <a className="menu-list-item-link" href={item.link}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;