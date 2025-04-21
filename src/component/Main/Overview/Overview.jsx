import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsFire } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { PiNotebook, PiNotebookFill } from "react-icons/pi";
import Piechart from "./chart";
import IncomeGraphChart from "./chart";


// import { Bar } from "react-chartjs-2"; // To display the bar graph

const Overview = () => {
    // Mock data for session count and recent sessions
    const sessionData = {
        totalSessions: 143,
        ongoingSessions: 3,
        totalUsers: 1237,
    };

    const recentSessions = [
        { sessionName: "First Session", totalParticipant: 5, status: "Ongoing" },
        { sessionName: "First Session", totalParticipant: 5, status: "Completed" },
        { sessionName: "First Session", totalParticipant: 5, status: "Ongoing" },
        { sessionName: "First Session", totalParticipant: 5, status: "Completed" },
    ];

    const sessionChartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
            {
                label: "Sessions",
                data: [15, 10, 18, 20, 12], // Example data for sessions
                backgroundColor: "#4379F2", // Blue color for sessions
                borderRadius: 8,
            },
            {
                label: "Players",
                data: [10, 8, 12, 15, 10], // Example data for players
                backgroundColor: "#39D03F", // Green color for players
                borderRadius: 8,
            },
        ],
    };

    const getFullImageUrl = (path) => {
        if (!path) return "/default-image.jpg";
        if (path.startsWith("http")) return path;
        return `${ImageBaseUrl}${path}`;
    };

    return (
        <div className="w-full container mx-auto space-y-10 p-4 ">
            <div className="flex gap-5">
                {/* Overview Section */}
                <div className="w-[949px]  ">
                    <h1 className="text-xl font-bold">Overview</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
                        {[
                            { icon: <TfiAlarmClock className="text-4xl text-[#111111]" />, title: "Total Sessions", data: sessionData.totalSessions },
                            { icon: <BsFire className="text-4xl text-[#111111]" />, title: "Ongoing Sessions", data: sessionData.ongoingSessions },
                            { icon: <FaUserAlt className="text-4xl text-[#111111]" />, title: "Total Users", data: sessionData.totalUsers },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">

                                <div>
                                    <p className="text-gray-600 text-lg font-semibold">{stat.title}</p>
                                    <p className="text-3xl font-bold">{stat.data}</p>
                                </div>
                                <div className="flex items-center justify-center w-16 h-16 rounded-full">
                                    {stat.icon}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Session and Player Ratio - Bar Graph */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Session and Player Ratio</h2>
                        {/* <Bar data={sessionChartData} options={{ responsive: true }} /> */}
                        <IncomeGraphChart/>
                    </div>
                </div>

                {/* Recent Sessions */}
                <div className="w-[635px] ">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 ">
                        <h1 className="text-xl font-bold">Recent Sessions</h1>
                        {recentSessions.map((session, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between">
                                    <div className="font-semibold text-lg">{session.sessionName}</div>

                                    <div>
                                        <p className="text-gray-600 text-sm mt-2">Total Participant: <br /> {session.totalParticipant}</p>
                                    </div>

                                    <div
                                        className={`px-4 py-2 rounded-full text-white ${session.status === "Ongoing" ? "bg-green-500" : "bg-blue-500"
                                            }`}
                                    >
                                        {session.status}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
