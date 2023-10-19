'use client'

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import TopProducts from "../Charts/TopProducts";
import Activities from "../Charts/Activities";
import AddNewProfile from "../AddUser/AddNewProfile";
import Hero from "./Hero";

const Dashboard = () => {
    const [isCardHidden, setCardHidden] = useState(true);
    const [isOpen, setIsOpen] = useState(true);
    const { data, status } = useSession();

    if (status === 'unauthenticated') {
        setTimeout(function () {
            window.location.href = '/';
        }, 2000);
        return "You're not authorized";
    }
    if (status === 'loading') {
        return "Loading...";
    }

    const toggleCard = () => {
        setCardHidden(!isCardHidden);
    };

    const toggleHamburger = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <>
            {/* Side Bar */}
            <div
                id={`${isOpen ? 'sidebar-closed' : 'sidebar'}`}
                className={`${isOpen ? '' : '-ml-96'} sidebar fixed flex justify-between flex-col pl-10 w-60 top-5 bottom-5 left-5 text-left text-[1.13rem] text-white font-montserrat rounded-[20px] [background:linear-gradient(180deg,_#4285f4,_#3c83f9)] `}
            >
                <div className="">
                    <svg
                        className='hover:cursor-pointer mt-8 closs-icon' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                        onClick={toggleHamburger}
                    >
                        <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                    </svg>
                    <h2 className=" text-[2rem] mt-6 font-bold">Board.</h2>
                    <div className="flex flex-col mt-10">
                        <Link href='#' className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl">
                            <img className=" " alt="" src="dashboard_icon.svg" />
                            <b className="text-white ml-5 ">Dashboard</b>
                        </Link>

                        <Link href='#' className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl">
                            <img className=" " alt="" src="transaction_icon.svg" />
                            <span className=" text-white ml-5">Transactions</span>
                        </Link>

                        <Link href='#' className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl">
                            <img className=" " alt="" src="schedule_icon.svg" />
                            <span className="text-white ml-5">Schedules</span>
                        </Link>

                        <Link href='#' className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl">
                            <img className=" " alt="" src="user_icon.svg" />
                            <span className="text-white ml-5">Users</span>
                        </Link>

                        <Link href='#' className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl">
                            <img className="" alt="" src="setting_icon.svg" />
                            <span className="text-white ml-5">Settings</span>
                        </Link>

                    </div>
                </div>

                <div className="flex flex-col mt-10">
                    <Link href='#'
                        className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl"
                    >
                        <span className=" text-white text-[0.88rem]">Help</span>
                    </Link>
                    <Link href='#'
                        className="flex items-center no-underline hover:bg-blue-600 transition duration-300 mr-10 p-3 rounded-xl"
                    >
                        <span className=" text-white text-[0.88rem]">Contact Us</span>
                    </Link>
                </div>
            </div>

            {/* Main */}
            <div id={`${isOpen ? 'dashboard' : 'dashboard-closed'}`} className={`dashboard mt-5 ${isOpen ? 'ml-72' : ''}`}>
                <div className="ml-6  mr-6">

                    {/* Navbar */}
                    <div className="flex mt-5 justify-between items-center">
                        <div className="flex items-center gap-5">
                            <svg
                                className="hamburger-icon hover:cursor-pointer"
                                onClick={toggleHamburger}
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h14M5 12h14M5 7h14" />
                            </svg>
                            <p className="text-[1.5rem] font-bold">Dashboard</p>
                        </div>
                        <div className="flex justify-between gap-5 items-center">
                            <div class="searchbox pt-2 relative mx-auto text-gray-600">
                                <input class="border-0 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm  focus:outline-none focus:ring focus:ring-violet-300"
                                    type="search" name="search" placeholder="Search" />
                                <button type="submit" class="absolute right-1 -top-1 mt-5 mr-4 border-none bg-transparent">
                                    <svg className="text-gray-600 h-6 w-5 fill-current" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </button>
                            </div>

                            <img className="bell-icon" alt="" src="bell_icon.svg" />

                            <div className="">
                                <ul className="flex items-center">
                                    <Link href="#" className="display-picture ml-auto" onClick={toggleCard}>
                                        <img src={data?.user?.image || "https://i.pravatar.cc/85"} alt="" className="h-[2.88rem] w-[2.88rem] object-cover rounded-full border-2 border-white hover:border-orange-500" />
                                    </Link>
                                </ul>
                                <div className={`card transition duration-500 ease-in-out ${isCardHidden ? 'hidden' : ''}`}>
                                    <ul className="flex flex-col items-center bg-blue-500 absolute top-20 right-0 rounded-xl py-2 px-5  list-none ">
                                        <li className="py-2 text-center font-semibold">
                                            <span className="text-white text-2xl no-underline p-2 tracking-wider">{data?.user.name.toUpperCase()}</span>
                                        </li>
                                        <li className="py-2 hover:bg-blue-600 transition duration-300 w-20 rounded-xl text-center">
                                            <Link href="#" className="text-white text-sm no-underline p-2">Profile</Link>
                                        </li>
                                        <li className="pb-2 hover:bg-blue-600 transition duration-300 w-20 rounded-xl text-center">
                                            <Link href="#" className="text-white text-sm p-2 no-underline">Account</Link>
                                        </li>
                                        <li className="pb-2 hover:bg-blue-600 transition duration-300 w-20 rounded-xl text-center">
                                            <Link href="#" className="text-white text-sm p-2 no-underline">Settings</Link>
                                        </li>
                                        <li className="pb-2 hover:bg-blue-600 transition duration-300 w-20 rounded-xl text-center">
                                            <Link
                                                href="#"
                                                className="text-white text-sm p-2 no-underline"
                                                onClick={() => signOut({ callbackUrl: "https://admin-dashboard-next-auth.vercel.app/" })}
                                            >
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Hero />

                    <div className=" mt-5 flex">
                        <div className="w-full rounded-[20px] bg-white shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro p-5" >
                            <Activities />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
                        <div className="rounded-[20px] bg-white shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro">

                            <TopProducts />

                        </div>

                        <div className="rounded-[20px] bg-white shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro">
                            <AddNewProfile />
                        </div>

                    </div>

                </div>
            </div >
        </>
    );
};

export default Dashboard;
