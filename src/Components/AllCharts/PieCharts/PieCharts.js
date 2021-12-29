import React from 'react';
import DonutChart from "react-donut-chart";
import './PieChart.css'

const PieCharts = () => {
    return (
        <div >
            <DonutChart
                className="PieChart-style fs-3"
                data={[
                    {
                        label: `Course Completed`,
                        value: 36
                    },
                    {
                        label: "Ongoing course",
                        value: 24
                    },
                    {
                        label: "Not started",
                        value: 36
                    }
                ]}
            />
        </div>
    );
};

export default PieCharts;