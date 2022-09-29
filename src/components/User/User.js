import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker} from '@fortawesome/free-solid-svg-icons'
import user from '../../profile.jpg'
import './User.css'

const User = () => {
    return (
        <div>
            <div className="user-info">
                <img src={user} alt="" />
                    <div className="details">
                        <h1>Daily Activities</h1>
                        <p><FontAwesomeIcon icon={faMapMarker} /> Hathazari,Chittagong</p>
                    </div>
            </div>

            <div className="user-details">
                <div>
                    <h3>
                        71<sub>kg</sub>
                    </h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>
                        5.8
                    </h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>
                        25<sub>yr</sub>
                    </h3>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default User;