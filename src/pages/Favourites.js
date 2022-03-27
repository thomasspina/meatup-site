import { useContext } from 'react';

import MeatupList from '../components/meatups/MeatupList';
import FavouritesContext from '../store/favourites-context';

function FavouritesPage() {
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if (favouritesCtx.totalFavourites === 0) {
        content = <p>You have no favourites yet.</p>
    } else {
       content = <MeatupList meatups={favouritesCtx.favourites} />
    }

    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}

export default FavouritesPage;