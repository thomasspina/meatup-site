import { useNavigate } from 'react-router-dom';

import NewMeatupForm from '../components/meatups/NewMeatupForm';

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeatupHandler(meatupData) {
        fetch(
                'https://react-getting-started-b050a-default-rtdb.firebaseio.com/meatups.json',
                {
                    method: 'POST',
                    body: JSON.stringify(meatupData),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            ).then(() => {
                navigate('/');
            });
    }

    return (
        <section>
            <h1>Add New Meatup</h1>
            <NewMeatupForm onAddMeatup={addMeatupHandler} />
        </section>
    );
}

export default NewMeetupPage;