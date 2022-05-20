import { useEffect, useState } from 'react';
import '../css/notification.css'

const Notification = ({ user }) => {
    const [alert, setAlert] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 3000);
        setAlert(true);
    }, [user]);

    return (
        <>
            {alert && <div className="notification">{user} sent a message</div>}
        </>
    )
}

export default Notification;