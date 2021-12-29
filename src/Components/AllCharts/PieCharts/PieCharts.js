import React from 'react';
import { Cell, Pie, PieChart } from 'recharts';

const PieCharts = () => {
    const data01 = [
        {
            "name": "Group A",
            "value": 36,
        },
        {
            "name": "Group B",
            "value": 36,
        },
        {
            "name": "Group C",
            "value": 28,
        }
    ];
    const color = [
        {
            "value": "green"
        },
        {
            "value": "green"
        },
        {
            "value": "#8884d8"
        }
    ]
    return (
        <div>
            <PieChart width={250} height={250}>
                <Pie data={data01} innerRadius={60} outerRadius={100}>
                    {
                        color.map((index) => (
                            <Cell fill={color[index]} />
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
    );
};

export default PieCharts;