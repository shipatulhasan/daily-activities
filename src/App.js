import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [activities,setActivities] = useState([])

  useEffect(()=>{

      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setActivities(data))

  }, [])

  const [time,setTime] = useState(0)
  const handleTask = (id) =>{
    const findTask = activities.find(activity=> activity.id === id)

    if(findTask){
      setTime((curr)=>curr + findTask.hour)
    }
  } 

  return (
    <section className='container'>
      <div className="main-container">
      <Main activities={activities} handleTask = {handleTask}></Main>
      </div>
      <div className="sidbar-container">
      <Sidebar time = {time}></Sidebar>
      </div>
      
    </section>
  );
}

export default App;
