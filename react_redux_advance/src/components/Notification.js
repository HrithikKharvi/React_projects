import style from './Notification.module.css';
import { useSelector } from 'react-redux';


const Notification = props => {
    let containercontainerStyle = style.notificationBody;
    let notificationObject = useSelector(d => d.cart.notification);
    console.log(notificationObject);

    if (notificationObject && notificationObject.state == 'success') {
        containercontainerStyle += " " + style.success;
    } else if (notificationObject && notificationObject.state == 'error') {
        containercontainerStyle += " " + style.error;
    } else {
        containercontainerStyle += " " + style.progress;
    }

    return (
        <div className={containercontainerStyle}>
            <div className={style.messageContainer}>{ notificationObject ? notificationObject.message : ""}</div>
            <div className={style.stateContainer}>{ notificationObject ? notificationObject.state.toUpperCase() : ""}</div>
        </div>
    )
} 

export default Notification;
