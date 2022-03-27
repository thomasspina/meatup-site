import { useState, useEffect } from 'react';
import MeatupList from '../components/meatups/MeatupList';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeatups, setLoadedMeatups] = useState([]);

    useEffect(() => {
        fetch(
            'https://react-getting-started-b050a-default-rtdb.firebaseio.com/meatups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeatups(meetups);
        });
    }, [isLoading]);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <h1>All Meatups</h1>
            <MeatupList meatups={loadedMeatups} />
        </div>
    );
}

export default AllMeetupsPage;