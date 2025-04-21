import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "0", Dataset1: 700, Dataset2: 300, Dataset3: 100, Dataset4: 500 },
    { name: "1", Dataset1: 500, Dataset2: 800, Dataset3: 250, Dataset4: 650 },
    { name: "2", Dataset1: 1000, Dataset2: 400, Dataset3: 500, Dataset4: 300 },
    { name: "3", Dataset1: 400, Dataset2: 750, Dataset3: 700, Dataset4: 600 },
    { name: "4", Dataset1: 250, Dataset2: 600, Dataset3: 300, Dataset4: 800 },
];

const LineChartComponent = () => {
    return (
        <div className=" p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Leaderboard Graph</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Dataset1" stroke="#00bcd4" />
                    <Line type="monotone" dataKey="Dataset2" stroke="#3f51b5" />
                    <Line type="monotone" dataKey="Dataset3" stroke="#ff9800" />
                    <Line type="monotone" dataKey="Dataset4" stroke="#4caf50" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;
