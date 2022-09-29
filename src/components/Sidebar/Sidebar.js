import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import User from '../User/User';
import './Sidebar.css'

const Sidebar = ({time}) => {

    const [breakTime, setBreaktime] = useState("0m")

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
        <section className='sidebar-container'>
            <User></User>

            {/* break button */}
            <h4 className='title'>Add a Break</h4> 
            <div className='break'>
            <Break handleBreak={handleBreak}></Break>
            </div>
            {/* time count section */}
            <h4 className='title'>Activities Details</h4> 
            <div className='time-count'>
            <h5>Activities Time:</h5> <span> {time} hour</span>
            </div>
            <div className='time-count'>
            <h5>Break: </h5><span> {breakTime}inute</span>
            </div>

            <button className='completed-btn'>
                    <p>Task completed</p>
                     </button>

        </section>
    );
};

export default Sidebar;