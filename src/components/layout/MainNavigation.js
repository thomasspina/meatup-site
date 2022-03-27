import { Link } from 'react-router-dom';
import { useContext } from 'react';

import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourites-context';

function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meatups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meatups</Link>
                    </li>
                    <li>
                        <Link to='/new-meatups'>New Meatups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Favourite Meatups
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default MainNavigation;