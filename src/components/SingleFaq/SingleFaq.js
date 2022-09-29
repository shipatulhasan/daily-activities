import React from 'react';
import './SingleFaq.css'

const SingleFaq = ({blog}) => {
    const {qu,ans} = blog
    return (
        <div className='card'  data-aos="zoom-in" data-aos-once="true" data-aos-delay = "800" data-aos-easing="ease-in-out">
            <div className="blog-body">
                    <h3 className='title'>{qu}</h3>
                    <p>{ans}</p>
                </div>
            </div>
    );
};

export default SingleFaq;