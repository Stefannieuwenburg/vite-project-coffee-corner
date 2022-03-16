import NavbarStyles from "../css/NavbarStyles.module.scss"


export default function CoffeeNavbar() {
    return (
        <div>
            <ul>
                <li>
                    <h3>Logo Happy Coffee corner</h3>
                </li>

                <li>
                    <a href="#home">Coffee Corner</a>
                </li>
                <li>
                    <a href="#BaristaNews">Barista News</a>
                </li>
                <li>
                    <a href="#menu">Coffee Menu</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

