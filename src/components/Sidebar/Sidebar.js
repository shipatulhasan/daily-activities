import React from 'react';
import user from '../../profile.jpg'
import './Sidebar.css'

const Sidebar = ({time}) => {
    return (
        <main className='sidebar-container'>
            <section className="user-info">
                <img src={user} alt="" />
                    <div className="details">
                        <h1>Daily Activities</h1>
                        <p>Select your today's task</p>
                    </div>
            </section>
            <p>{time}</p>
        </main>
    );
};

export default Sidebar;