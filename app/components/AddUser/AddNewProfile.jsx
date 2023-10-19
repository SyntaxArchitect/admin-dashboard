import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/userSlice';


const AddNewProfile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    const [activeSection, setActiveSection] = useState('basic');
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        instagram: '',
        youtube: ''
    });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleUserCreate = () => {
        dispatch(setData(userData))
        setIsOpen(!isOpen);
    }
    return (
        <>
            {!user && (
                <div className='h-64 flex items-center justify-center'>
                    <div
                        className='flex flex-col items-center hover:cursor-pointer'
                        onClick={togglePopup}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 32 32">
                            <path fill="#f2f2f2" d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z" />
                            <path fill="#999CA0" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
                        </svg>
                        <p class="text-gray-500 font-figtree text-md font-semibold font-italic">
                            Add Profile
                        </p>
                    </div>
                </div>
            )}

            {user && user.name.length > 0 && (
                <div className='h-64'>
                    <div className='px-10 py-5'>
                        <h2 class="text-black font-figtree text-2xl font-semibold leading-6 py-3">
                            {user.name}
                        </h2>
                        <div className='grid grid-cols-2 gap-10 py-8'>
                            <div className='flex items-center justify-center gap-3'>
                                <img className="" alt="" src="whatsapp_icon.svg" />
                                <span>{userData.phone}</span>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <img className="" alt="" src="instagram_icon.svg" />
                                <span>{user.instagram}</span>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <img className="" alt="" src="mail_icon.svg" />
                                <span>{user.email}</span>
                            </div>
                            <div className='flex items-center justify-center gap-3'>
                                <img className="" alt="" src="youtube_icon.svg" />
                                <span>{user.youtube}</span>
                            </div>
                        </div>

                    </div>


                </div>
            )}

            {isOpen && (
                <div className="fixed top-1/2 left-1/2 scale-100 opacity-100 transition-transform transform -translate-x-1/2 -translate-y-1/2 w-[38%] rounded-[20px] bg-white shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro p-5 overflow-auto">
                    <div className='flex items-center justify-between'>
                        <h4 class="text-var-light-bulma font-figtree text-1.25rem font-semibold leading-2rem">
                            Add New Profile
                        </h4>
                        <svg
                            className='hover:cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
                            onClick={togglePopup}
                        >
                            <path fill="none" stroke="#999ca0" stroke-linecap="round" stroke-width="1.5" d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07" />
                        </svg>
                    </div>

                    <div className='flex items-center justify-evenly mt-10'>
                        <div
                            className='flex flex-col w-full items-center gap-2 hover:cursor-pointer'
                            onClick={() => handleSectionChange('basic')}
                        >
                            <h4 class="text-var-light-bulma font-figtree text-1rem font-semibold leading-2rem">
                                Basic
                            </h4>
                            <div className={`w-[90%] h-1 ${activeSection === 'basic' ? 'bg-blue-500' : 'bg-white'}`}></div>
                        </div>

                        <div
                            className='flex flex-col w-full items-center gap-2 hover:cursor-pointer'
                            onClick={() => handleSectionChange('social')}
                        >
                            <h4 class="text-var-light-bulma font-figtree text-1.25rem font-semibold leading-2rem">
                                Social
                            </h4>
                            <div className={`w-[90%] h-1 ${activeSection === 'basic' ? 'bg-white' : 'bg-blue-500'}`}></div>
                        </div>
                    </div>
                    {activeSection === 'basic' && (
                        <div className='flex flex-col m-5'>
                            <p className="text-var-light-bulma font-figtree text-1rem font-semibold">Enter Name</p>
                            <input
                                type="text"
                                name="name"
                                value={userData.name}
                                placeholder="Eg. John Doe"
                                className="p-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                                onChange={handleInputChange}
                            />

                            <p className="text-var-light-bulma font-figtree text-1rem font-semibold">Enter Email</p>
                            <input
                                type="email"
                                name="email"
                                value={userData.email}
                                placeholder="Eg. John@xyz.com"
                                className="p-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                                onChange={handleInputChange}
                            />

                            <p className="text-var-light-bulma font-figtree text-1rem font-semibold">Enter Phone</p>
                            <input
                                type="text"
                                name="phone"
                                value={userData.phone}
                                placeholder="Eg.  9123456789"
                                className="p-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                                onChange={handleInputChange}
                            />

                            <button
                                className='self-end w-16 h-10 mt-10 rounded-lg bg-[#3e84f8] text-white text-center text-xl font-semibold border-0 hover:cursor-pointer'
                                onClick={() => handleSectionChange('social')}
                            >
                                Next
                            </button>
                        </div>
                    )}
                    {activeSection === 'social' && (
                        <div className='flex flex-col m-5'>
                            <p className="text-gray-800 font-figtree text-base font-normal leading-6">
                                Instagram Link
                                <span className='text-gray-500 font-figtree text-base font-normal leading-6'> (Optional)</span>
                            </p>
                            <input
                                type="text"
                                name="instagram"
                                value={userData.instagram}
                                placeholder="Eg. ..instagram.com/username"
                                className="p-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                                onChange={handleInputChange}
                            />

                            <p className="text-gray-800 font-figtree text-base font-normal leading-6">
                                Youtube Link
                                <span className='text-gray-500 font-figtree text-base font-normal leading-6'> (Optional)</span>
                            </p>
                            <input
                                type="text"
                                name="youtube"
                                value={userData.youtube}
                                placeholder="Eg. ..youtebe/username"
                                className="p-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
                                onChange={handleInputChange}
                            />

                            <div className='self-end mt-10 flex items-center gap-5'>
                                <button
                                    className='w-16 h-10 rounded-lg text-center text-xl bg-white font-semibold border-1 border-gray-400 hover:cursor-pointer'
                                    onClick={togglePopup}
                                >
                                    Close
                                </button>
                                <button
                                    className='w-16 h-10 rounded-lg bg-[#3e84f8] text-white text-center text-xl font-semibold border-0 hover:cursor-pointer'
                                    onClick={handleUserCreate}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </div >
            )}
        </>
    )
}

export default AddNewProfile