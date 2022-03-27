import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeatupForm.module.css';

function NewMeatupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addresInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addresInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meatupData = {
            title: enteredTitle,
            address: enteredAddress,
            image: enteredImage,
            description: enteredDescription
        };

        props.onAddMeatup(meatupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meatup title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meatup image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Meatup address</label>
                    <input type="text" required id="address" ref={addresInputRef} />
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Meatup description</label>
                    <textarea id="description" require rows="5" ref={descriptionInputRef} ></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add meatup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeatupForm;