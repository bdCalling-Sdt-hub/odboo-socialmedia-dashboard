import React from 'react'
import user from '../../../assets/provider/provider.jpg'



const TransitionDetails=()=>{
    return(
        <div className="w-full container mx-auto px-5">
            <h1 className='text-2xl mb-5'>Transcation Details</h1>
            <div className="flex border border-[#1EB9C6] justify-between p-10 ">

                <div className="flex">
                    <div>
                        <img src={user} className='w-20 h-20 rounded-full'></img>
                    </div>
                    <div className='pt-2 ml-2'>
                        <p className='text-xl'>User Name</p>
                        <h2 className='text-2xl'>mr.provider</h2>
                    </div>
                </div>
                <div>
                    <p>Amount</p>
                    <h2>150 CHF</h2>
                    <br />
                    <p>Transcation ID</p>
                    <h2>121511052585</h2>
                </div>
                <div>
                    <p>Role</p>
                    <h1>Coustomer</h1>
                        <br />
                    <p>Reason</p>
                    <h1>Subscription Purchase</h1>
                </div>
                <div>
                    <p>Package Name</p>
                    <h2>General</h2>
                        <br />
                    <p>Amount</p>
                    <h2>150 CHF</h2>
                </div>
                <div>
                    <p>Transaction Date</p>
                    <h2>2 March,2025</h2>
                        <br />
                    <p>Transaction Time</p>
                    <h2>11.00Am</h2>
                </div>

            </div>
        </div>
    )
}


export default TransitionDetails;

