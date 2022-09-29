
import logo from '../../daily-tasks.png'
import './Main.css'

const Main = () => {
   
    return (
        <section>
            <div className="header">
                <div className="site-info">
                    <img src={logo} alt="" />
                    <h1>Daily Activities</h1>
                </div>
                <div className="description">
                    <p>Select your today's task</p>
                </div>
                
            </div>
        </section>
    );
};

export default Main;