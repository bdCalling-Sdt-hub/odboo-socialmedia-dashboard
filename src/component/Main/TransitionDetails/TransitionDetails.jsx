import React from 'react'
import user from '../../../assets/provider/provider.jpg'



const TransitionDetails = () => {
    return (
        <div className="w-full container mx-auto px-5">
            <h1 className='text-2xl mb-5'>Transcation Details</h1>
            <div className="flex border border-[#1EB9C6] justify-between p-10 ">

                <div className="flex">
                    <div className=''>

                        <img src={user} className='w-40 h-40 rounded-full'></img>
                    </div>
                    <div className='ml-2'>
                        <span className='text-2xl mb-5 font-bold'>From:</span>
                        <p className='text-md'>User Name</p>
                        <h2 className='text-2xl font-bold'>mr.provider</h2>
                        <br />
                        <p>Email</p>
                        <p className='text-black'>ami@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p>Amount</p>
                    <h2 className='text-xl text-black font-bold'>150 CHF</h2>
                    <br />
                    <p>Transcation ID</p>
                    <h2 className='text-xl text-black font-bold'>121511052585</h2>
                </div>
                <div>
                    <p >Role</p>
                    <h1 className='text-xl text-black '>Coustomer</h1>
                    <br />
                    <p>Reason</p>
                    <h1 className='text-xl text-black '>Subscription Purchase</h1>
                </div>
                <div>
                    <p>Package Name</p>
                    <h2 className='text-xl text-black font-bold'>General</h2>
                    <br />
                    <p>Amount</p>
                    <h2 className='text-xl text-black font-bold'>150 CHF</h2>
                </div>
                <div>
                    <p>Transaction Date</p>
                    <h2>2 March,2025</h2>
                    <br />
                    <p>Transaction Time</p>
                    <h2>11.00Am</h2>
                </div>

            </div>
            <div className="flex border mt-10 border-[#1EB9C6] justify-between p-10 ">

                <div className="flex">
                    <div className=''>
                        <img src={user} className='w-40 h-40 rounded-full'></img>
                    </div>
                    <div className=' ml-2'>
                        <span className='text-2xl font-bold'>TO:</span>
                        <p className='text-md'>User Name</p>
                        <h2 className='text-2xl font-bold'>mr.provider</h2>
                        <br />
                        <p>Email</p>
                        <p className='text-black'>ami@gmail.com</p>
                    </div>
                </div>
                <div>
                    <p>Amount</p>
                    <h2 className='text-xl text-black font-bold'>150 CHF</h2>
                    <br />
                    <p>Transcation ID</p>
                    <h2 className='text-xl text-black font-bold'>121511052585</h2>
                </div>
                <div>
                    <p >Role</p>
                    <h1 className='text-xl text-black '>Coustomer</h1>
                    <br />
                    <p>Reason</p>
                    <h1 className='text-xl text-black '>Subscription Purchase</h1>
                </div>


            </div>
        </div>
    )
}


export default TransitionDetails;

