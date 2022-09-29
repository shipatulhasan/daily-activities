import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  // fetch data from json

  const [activities,setActivities] = useState([])

  useEffect(()=>{

      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setActivities(data))

  }, [])

  // get total time of activities

  const [count,setCount] = useState(0)

  useEffect(()=>{

    const storedCount =JSON.parse(localStorage.getItem('activities-time')) 
    if(storedCount){
      setCount(storedCount)
    }

  }, [])

  // store total in local

  let total = 0
  const handleTask = (id) =>{
    const findTask = activities.find(activity=> activity.id === id)

    if(findTask){
      total = count + findTask.hour
      setCount(total)
    }
    localStorage.setItem('activities-time',total)
  } 

  // break count

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

  // resetData 

  const resetData = () =>{
    localStorage.clear()
    setCount(0)
    setBreaktime('0m')
  }

  return (
    <section className='container'>
      <div className="main-container">
      <Main activities={activities} handleTask = {handleTask}></Main>
      </div>

      <div className="sidbar-container">
      <Sidebar time = {count} resetData = {resetData} handleBreak={handleBreak} breakTime={breakTime}></Sidebar>
      </div>

      <div className="footer-container">
      <Footer></Footer>
      </div>
      
    </section>
  );
}

export default App;
