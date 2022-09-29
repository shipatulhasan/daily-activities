import React from 'react';
import './Activity.css'

const Activity = ({activity, handleTask}) => {
    const {id,img,title,details,hour} = activity
    return (
        <div className='card' data-aos="zoom-in" data-aos-once="true" data-aos-delay = "200" data-aos-easing="ease-in-out">
            <div className="card-body">
                <img src={img} alt="" />
                <div className="card-content">
                    <div>
                    <h3 className='title'>{title}</h3>
                    <p>{details}</p>
                    </div>
                    <div>
                    <h4 className='time'>Time_required: {hour}hour</h4>
                    </div>
                </div>
            </div>

            <div className="card-footer">  
            <button onClick={()=>handleTask(id)}>
                    <p>Add to list</p>
                     </button>

            </div>   
        </div>
    );
};

export default Activity;