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

  return (
    <section className='container'>
      <div className="main-container">
      <Main activities={activities}></Main>
      </div>
      <div className="sidbar-container">
      <Sidebar></Sidebar>
      </div>
      
    </section>
  );
}

export default App;
