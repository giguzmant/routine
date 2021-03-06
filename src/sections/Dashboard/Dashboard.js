import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {   faCog,
           faBell,
           faChartPie, 
           faInbox, 
           faUserCircle,
           faSearch,
           faAngleDown

        } from '@fortawesome/free-solid-svg-icons';
        
import './Dashboard.scss';
import Money from '../../assets/money.png';
import Winner from '../../assets/winner.png';
import News from '../../components/News/News';
import AnalyticsOverview from '../../components/AnalyticsOverview/AnalyticsOverview';
import Important from '../Important/Important';
import Reminders from '../../components/Reminders/Reminders';

const news = [{
    title: "Global stock markets plunge on coronavirus fears",
    img: Money
},
{
    title: "Winner's Bag: Patrick Reed, World Golf",
    img: Winner
}
]

const Dashboard = () => {
    return(
        <section>
            <div className="dashboard-container">
                <div className="dashboard-side">
                    <div className="dashboard-side-logo">
                        <h4>tskp</h4>
                    </div>
                    <div className="dashboard-side-icons">
                        <FontAwesomeIcon icon={faCog} />
                        <FontAwesomeIcon icon={faChartPie}/>
                        <FontAwesomeIcon icon={faInbox}/>
                        <FontAwesomeIcon icon={faUserCircle}/>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="dashboard-content">
                        <div className="dashboard-content-top">
                            <div className="dashboard-content-title">
                                <h3>Activity Dashboard</h3>
                            </div>
                            <div className="dashboard-content-icons">
                                <FontAwesomeIcon icon={faBell}/>
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                        </div>
                        <AnalyticsOverview/>
                        <div className="dashboard-2nd-row">
                            <Important/>
                            <Reminders/>
                        </div>
                    
                    </div>
                    <div className="dashboard-news">
                        <div className="dashboard-news-top">
                            <div className="dashboard-news-title">
                                <h4>News</h4>
                                <p>24 Feb, 2020</p>
                            </div>
                            <div className="dashboard-news-popular">
                                <h4>Popular</h4>
                                <FontAwesomeIcon icon={faAngleDown}/>
                            </div>
                        </div>
                        <News news={news}/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Dashboard;