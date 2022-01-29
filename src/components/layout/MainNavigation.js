import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div>Meatups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meatups</Link>
                    </li>
                    <li>
                        <Link to='/new-meatups'>New Meatups</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorite Meatups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainNavigation;