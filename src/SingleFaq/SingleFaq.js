import React from 'react';
import './SingleFaq.css'

const SingleFaq = ({blog}) => {
    return (
        <div className='card'>
            <div className="blog-body">
                    <h3 className='title'>{blog.qu}</h3>
                    <p>{blog.ans}</p>
                </div>
            </div>
    );
};

export default SingleFaq;