

import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import users from '../../../assets/categories/users.png'
import userCheck from '../../../assets/categories/User check.png'
import userX from '../../../assets/categories/User x.png'
import User from '../../../assets/categories/User.png'

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);




const userOverviewData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'User Overview',
            data: [300, 500, 400, 600, 500, 650, 700, 750, 600, 650, 800, 950],
            borderColor: '#1EB9C6',  // Teal color
            backgroundColor: 'rgba(39, 174, 96, 0.2)',
            fill: true,
        },
    ],
};

const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Income',
            data: [10000, 15000, 25000, 30000, 35000, 30000, 40000, 45000, 47000, 50000, 55000, 60000],
            backgroundColor: '#1EB9C6',  // Teal color
        },
    ],
};

// Options for the graphs
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};


const Dashboard = () => {
    return (
        <div className="w-full container mx-auto   bg-white space-y-6">
            {/* Header and Graphs code here */}
            <div className="  p-6 space-y-6 bg-white">
                {/* Header Section with Stats */}
                <div className="lg:flex gap-8">
                    {/* Total User */}
                    <div className="w-1/4 p-4 border border-[#1EB9C6] rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-[#1EB9C6]"><img src={users} alt="" /></span>
                            <div>
                                <span className="text-xl font-bold text-[#1EB9C6]">Total User</span>
                                <div className="text-2xl text-[#1EB9C6] font-bold">656</div>
                            </div>
                        </div>
                    </div>

                    {/* Total Customers */}
                    <div className="w-1/4 p-4 border border-[#1EB9C6] rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-[#1EB9C6]"><img src={userCheck} alt="" /></span>
                            <div>
                                <span className="text-xl font-bold text-[#1EB9C6]">Total Customers</span>
                                <div className="text-2xl text-[#1EB9C6] font-bold">656</div>
                            </div>
                        </div>
                    </div>

                    {/* Total Company */}
                    <div className="w-1/4 p-4 border border-[#1EB9C6] rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-[#1EB9C6]"><img src={userX} alt="" /></span>
                            <div>
                                <span className="text-xl font-bold text-[#1EB9C6]">Total Company</span>
                                <div className="text-2xl text-[#1EB9C6] font-bold">656</div>
                            </div>
                        </div>
                    </div>

                    {/* Total Provider */}
                    <div className="w-1/4 p-2 border border-[#1EB9C6] rounded-lg shadow-md">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl text-[#1EB9C6]"><img src={User} alt="" /></span>
                            <div>
                                <span className="text-xl font-bold text-[#1EB9C6]">Total Provider</span>
                                <div className="text-2xl text-[#1EB9C6] font-bold">656</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* User Overview Graph */}
            <div className="flex gap-8 p-6">
                {/* User Overview Graph */}
                <div className="w-1/2 p-4 border border-[#1EB9C6] rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-[#1EB9C6] mb-4">User Overview</h3>
                    <Line data={userOverviewData} options={options} />
                </div>

                {/* Income Graph */}
                <div className="w-1/2 p-4 border border-[#1EB9C6] rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-[#1EB9C6] mb-4">Income</h3>
                    <Bar data={incomeData} options={options} />
                </div>
            </div>
        </div>



    );
};

export default Dashboard