import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <section className='container'>
      <div className="main-container">
      <Main></Main>
      </div>
      <div className="sidbar-container">
      <Sidebar></Sidebar>
      </div>
      
    </section>
  );
}

export default App;
