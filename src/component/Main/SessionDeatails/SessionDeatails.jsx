import React from "react";
import LineChartComponent from "./grapchart";

const SessionAnalytics = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center p-4    mt-10 mb-10">
                <div>
                    <h1 className="text-3xl font-semibold">First Session Analytics</h1>
                    <h3 className="text-xl">Florence, Italy</h3>
                </div>
                <div className="flex space-x-9">
                    <div className="flex flex-col items-center justify-center bg-white border-2 border-blue-500 rounded-lg p-4 w-[150px] h-[76px]">
                        <span className="text-sm text-gray-500">Session Duration</span>
                        <span className="text-lg font-semibold">00:52:12</span>
                    </div>

                    {/* Total Participants Card */}
                    <div className="flex flex-col items-center justify-center bg-white border-2 border-blue-500 rounded-lg p-4 w-[150px] h-[76px]">
                        <span className="text-sm text-gray-500">Total Participants</span>
                        <span className="text-lg font-semibold">5</span>
                    </div>

                    {/* Session Status Card */}
                    <div className="flex flex-col items-center justify-center bg-white border-2 border-blue-500 rounded-lg p-4 w-[150px] h-[76px]">
                        <span className="text-sm text-gray-500">Session Status</span>
                        <span className="text-lg font-semibold text-green-600">Ongoing</span>
                    </div>
                </div>
            </div>


            <div className="  flex gap-5">
                <div className="w-[50%]  p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-medium">Leaderboard</h2>
                    <table className="w-full mt-4 table-auto text-sm">
                        <thead>
                            <tr className="border-b">
                                <th className="p-2 text-left">Player Name</th>
                                <th className="p-2 text-left">Location</th>
                                <th className="p-2 text-left">Last Lap</th>
                                <th className="p-2 text-left">Best Lap</th>
                                <th className="p-2 text-left">Gap</th>
                                <th className="p-2 text-left">Total Time</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="p-2">Rakibul Hossaz</td>
                                <td className="p-2">Florence, Italy</td>
                                <td className="p-2">51:23</td>
                                <td className="p-2">48:52</td>
                                <td className="p-2 text-green-600">+01:23</td>
                                <td className="p-2">02:52:55</td>
                            </tr>
                            <tr>
                                <td className="p-2">Rakibul Hossaz</td>
                                <td className="p-2">Florence, Italy</td>
                                <td className="p-2">51:23</td>
                                <td className="p-2">48:52</td>
                                <td className="p-2 text-green-600">Best</td>
                                <td className="p-2">02:52:55</td>
                            </tr>
                            <tr>
                                <td className="p-2">Rakibul Hossaz</td>
                                <td className="p-2">Florence, Italy</td>
                                <td className="p-2">51:23</td>
                                <td className="p-2">48:52</td>
                                <td className="p-2 text-green-600">+01:23</td>
                                <td className="p-2">02:52:55</td>
                            </tr>
                            <tr>
                                <td className="p-2">Rakibul Hossaz</td>
                                <td className="p-2">Florence, Italy</td>
                                <td className="p-2">51:23</td>
                                <td className="p-2">48:52</td>
                                <td className="p-2 text-green-600">+01:23</td>
                                <td className="p-2">02:52:55</td>
                            </tr>
                            <tr>
                                <td className="p-2">Rakibul Hossaz</td>
                                <td className="p-2">Florence, Italy</td>
                                <td className="p-2">51:23</td>
                                <td className="p-2">48:52</td>
                                <td className="p-2 text-green-600">+01:23</td>
                                <td className="p-2">02:52:55</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-[50%] mt-6">
                    <h3 className="text-xl font-medium">Leaderboard Graph</h3>
                    <div className="w-full   mt-4">
                        {/* You can integrate a charting library such as Chart.js or Recharts to render the graph */}


                        <LineChartComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SessionAnalytics;
