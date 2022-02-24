import classes from './MeatupList.module.css';
import MeatupItem from './MeatupItem';

function MeatupList(props) {
    return (
        <ul className={classes.list}>
            {props.meatups.map(meatup => 
                <MeatupItem 
                    key={meatup.id} 
                    id={meatup.id} 
                    image={meatup.image}
                    title={meatup.title}
                    address={meatup.address}
                    description={meatup.description} 
                />
            )}
        </ul>
    );
}

export default MeatupList;