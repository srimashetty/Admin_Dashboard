import React from 'react';
import Chart from "react-apexcharts";
import InsightCard from "../components/Insights/InsightCard";
import statusCards from "../assets/data/statusCard.json";
import BarChart from "../components/Chart/BarChart";
import AreaChart from "../components/Chart/AreaChart";
import PieChart from "../components/Chart/PieChart";
import RadialChart from "../components/Chart/RadialBar";

import "./_dashboard.scss";

const Dashboard = () => {
    return (
        <div className="dashboard">
          <div className="dashboard__container">
            <div className="dashboard__container__row1">
              <div className="dashboard__container__row1__left">
                <div className="dashboard__container__row1__left__status__card" style= {{width: "400px", padding: "20px"}}>
                  {statusCards.map((item, index) => (
                    <div className="dashboard__container__row1__left__status__card__data">
                      {/*statuscard data*/}
    
                      <InsightCard
                        title={item.title}
                        count={item.count}
                        icon={item.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="dashboard__container__row1__right">
                    <PieChart/>
              </div>
            </div>{" "}
            <AreaChart/>
            <div className="dashboard__container__row1">
              <RadialChart/>
              <BarChart/>    
            </div>
          </div>{" "}
        </div>
      );
};

export default Dashboard;