import NavbarStyles from "./NavbarStyles.module.scss"


export default function CoffeeNavbar() {
    return (
        <div>
            <ul>
                <li>
                    <h3>Logo Coffee to go</h3>
                </li>
                
                <li>
                    <a href="#home">Coffee Conner</a>
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

