import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Objetivo</Link>
                </li>
                <li>
                    <Link to="/Historia">Bibliografia</Link>
                </li>
                <li>
                    <Link to="/Manga">Obras</Link>
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu