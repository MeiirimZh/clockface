import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <h1><Link to="/">ClockFace</Link></h1>

                <nav>
                    <ul>
                        <li><Link to="/">Settings</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}