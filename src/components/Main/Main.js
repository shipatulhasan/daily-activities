import logo from '../../daily-tasks.png'
import Activity from '../Activity/Activity';
import Faq from '../Faq/Faq';
import './Main.css'

const Main = ({activities, handleTask}) => {
   
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
            <div className="activities-container">
                    {
                        activities.map(activity=><Activity 
                            activity={activity} handleTask={handleTask}
                            key={activity.id}
                            ></Activity>)
                    }
                   

                </div>
                <div>
                    <Faq></Faq>
                </div>
            </div>
        </section>
    );
};

export default Main;