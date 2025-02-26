"use client";
import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const Username = ({ params }) => {
  return (
    <>
      <div className='cover relative text-center  '>
        <img
          className='object-cover w-full h-64'
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5039876/acb45cab23684865a4c583361021f5e6/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/4.jpeg?token-time=1741046400&token-hash=xXukxJB3MDIXHu-uEbOsj-goLO65Z4kXoUjKVopfZ8Y%3D" alt="" />


        <div
          className='profile-pic  absolute right-[45%] border-white -bottom-[20%] '>
          <img
            className='w-40 h-40 rounded-3xl'
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5039876/41af123ffcfd4f98ad6a0a4bd3b61e41/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/3.png?token-time=1741132800&token-hash=tORTrJY6FAe9IIQqzmM0gXHQA5epI6H8r9JqQDBiPYI%3D" alt="" />
        </div>
      </div>

      <div className=" text-white user-info flex justify-center items-center flex-col  m-14">
        <h1 className="text-3xl font-bold mt-4 mb-2">@{params.username}</h1>
        <p>Lorem  vquat pulvinar erger  fggfd</p>
        <div
          className='text-gray-400'>
          <span className='m-2'>1010 paid members . 700 posts . 10354 likes</span>
        </div>

        <div className="payment-info flex gap-3 w-[80%]  text-white mt-11 flex-col md:flex-row">
          <div
            className='suppoters w-1/2 bg-slate-700'>
            {/* Show list of all the supporters as a leaderboard  */}
            {/* Show list of all the supporters as a leaderboard  */}
            <h2 className='text-2xl font-bold my-5 pl-4'> Top 10 Supporters</h2>
            <ul className='mx-5 text-lg'>
              <li className='my-2 flex  gap-2'>
                <FaUserCircle />
                <span>
                  nishant donated <span className='font-bold'>1324</span> with a message &quot;dsa&quot;
                </span>
              </li>
              <li className='my-2 flex  gap-2'>
                <FaUserCircle />
                <span>
                  nishant donated <span className='font-bold'>1324</span> with a message &quot;dsa&quot;
                </span>
              </li>
              <li className='my-2 flex  gap-2'>
                <FaUserCircle />
                <span>
                  nishant donated <span className='font-bold'>1324</span> with a message &quot;dsa&quot;
                </span>
              </li>
              <li className='my-2 flex  gap-2'>
                <FaUserCircle />
                <span>
                  nishant donated <span className='font-bold'>1324</span> with a message &quot;dsa&quot;
                </span>
              </li>
              <li className='my-2 flex  gap-2'>
                <FaUserCircle />
                <span>
                  nishant donated <span className='font-bold'>1324</span> with a message &quot;dsa&quot;
                </span>
              
              </li>

            </ul>
          </div>

          <div
            className='w-1/2 bg-slate-700'>
              {/* input for making payments */}
            <h2 className='text-2xl font-bold my-5 pl-4'> Make Payment</h2>
            
            <div className='flex gap-2 flex-col'>
                            {/* input for name and message   */}
                            <div>

                                <input name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            </div>
                            <input  name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />


                            <input name="amount" type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />


                            <button  type="button" className="text-white bg-gradient-to-br from-purple-900 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100">Pay</button>

                        </div>
                        {/* Or choose from these amounts  */}
                        <div className='flex flex-col md:flex-row gap-2 mt-5'>
                            <button className='bg-slate-800 p-3 rounded-lg' >Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg'>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg' >Pay ₹30</button>
                        </div>

            </div>
            



        </div>
      </div>

    </>
  )
}
export default Username;

