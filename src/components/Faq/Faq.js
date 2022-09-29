import React,{useState, useEffect} from 'react';
import SingleFaq from '../../SingleFaq/SingleFaq';

const Faq = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))

    }, [])




    return (
        <div className='activities-container'>
            {
                blogs.map(blog=><SingleFaq blog={blog} key={blog.id}></SingleFaq>)
            }
        </div>
    );
};

export default Faq;