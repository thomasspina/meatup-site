import { createContext, useState } from 'react';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeatup) => {},
    removeFavourite: (meatupId) => {},
    itemIsFavourite: (meatupId) => {}
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeatup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeatup);
        });
    }

    function removeFavouriteHandler(meatupId) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.filter(meatup => meatup.id !== meatupId);
        });
    }

    function itemIsFavouriteHandler(meatupId) {
        return userFavourites.some(meatup => meatup.id === meatupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return (
    <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
    );
}

export default FavouritesContext;