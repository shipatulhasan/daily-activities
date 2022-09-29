import React, { useEffect, useState } from 'react';
import user from '../../profile.jpg'
import Break from '../Break/Break';
import './Sidebar.css'

const Sidebar = ({time}) => {

    const [breakTime, setBreaktime] = useState("0")

    useEffect(()=>{
        const storedVlue = localStorage.getItem('Break-time')
        if(storedVlue){
            
            setBreaktime(storedVlue)
        }
    }, [])

    const handleBreak = (e)=>{

        const breakCount = (e.target.innerText)

        localStorage.setItem('Break-time',breakCount)

        setBreaktime(breakCount)

    }
    return (
        <main className='sidebar-container'>
            <section className="user-info">
                <img src={user} alt="" />
                    <div className="details">
                        <h1>Daily Activities</h1>
                        <p>Select your today's task</p>
                    </div>
            </section>
            <p>Activities Time: {time} hour</p>
            <p>Break: {breakTime} minute</p>
            <Break handleBreak={handleBreak}></Break>
        </main>
    );
};

export default Sidebar;