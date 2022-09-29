import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [activities,setActivities] = useState([])

  useEffect(()=>{

      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setActivities(data))

  }, [])

  const [count,setCount] = useState(0)

  useEffect(()=>{

    const storedCount =JSON.parse(localStorage.getItem('activities-time')) 
    if(storedCount){
      setCount(storedCount)
    }

  }, [])

  let total = 0
  const handleTask = (id) =>{
    const findTask = activities.find(activity=> activity.id === id)

    if(findTask){
      total = count + findTask.hour
      setCount(total)
    }
    localStorage.setItem('activities-time',total)
  } 

  return (
    <section className='container'>
      <div className="main-container">
      <Main activities={activities} handleTask = {handleTask}></Main>
      </div>
      
      <div className="sidbar-container">
      <Sidebar time = {count}></Sidebar>
      </div>

      <div className="footer-container">
      <Footer></Footer>
      </div>
      
    </section>
  );
}

export default App;
