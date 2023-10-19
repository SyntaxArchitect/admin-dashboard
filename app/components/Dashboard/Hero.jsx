const Hero = () => {
    return (
        <div id="hero-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-10">

            <div className="child h-32 rounded-[20px] shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro  ">
                <img className="bg-green-300 rounded-full p-1 mt-4 ml-5" alt="" src="revenue_icon.svg" />
                <p className="text-[0.69rem] font-lato text-black text-left w-[7.75rem] ml-5">Total Revenues</p>
                <div className="flex items-center ml-5">
                    <b className="text-[1.31rem] inline-block font-open-sans text-black text-left w-[7.75rem]">$2,129,430</b>
                    <div className="ml-3">
                        <span className="rounded-[34px] bg-e9f9eb h-[1.5rem] text-center text-[0.63rem]  text-amber-400	 text-supportive-roshi-100 font-figtree font-semibold p-1">+2.5%</span>
                    </div>
                </div>
            </div>

            <div className="child h-32 rounded-[20px] shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro">
                <img className="bg-green-300 rounded-full p-1 mt-4 ml-5" alt="" src="transaction_icon.svg" />
                <p className="text-[0.69rem] font-lato text-black text-left w-[7.75rem] ml-5">Total Transactions</p>
                <div className="flex items-center ml-5">
                    <b className="text-[1.31rem] inline-block font-open-sans text-black text-left w-[7.75rem]">$2,129,430</b>
                    <div className="ml-3">
                        <span className="rounded-[34px] bg-e9f9eb h-[1.5rem] text-center text-[0.63rem]  text-amber-400	 text-supportive-roshi-100 font-figtree font-semibold p-1">+2.5%</span>
                    </div>
                </div>
            </div>

            <div className="child h-32 rounded-[20px] shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro">
                <img className="bg-green-300 rounded-full p-1 mt-4 ml-5" alt="" src="like_icon.svg" />
                <p className="text-[0.69rem] font-lato text-black text-left w-[7.75rem] ml-5">Total Likes</p>
                <div className="flex items-center ml-5">
                    <b className="text-[1.31rem] inline-block font-open-sans text-black text-left w-[7.75rem]">$2,129,430</b>
                    <div className="ml-3">
                        <span className="rounded-[34px] bg-e9f9eb h-[1.5rem] text-center text-[0.63rem]  text-amber-400	 text-supportive-roshi-100 font-figtree font-semibold p-1">+2.5%</span>
                    </div>
                </div>
            </div>

            <div className="child h-32 rounded-[20px] shadow-[4px_4px_20px_rgba(0,_0,_0,_0.1)] box-border border-[2px] border-solid border-gainsboro">
                <img className="bg-green-300 rounded-full p-1 mt-4 ml-5" alt="" src="users_icon.svg" />
                <p className="text-[0.69rem] font-lato text-black text-left w-[7.75rem] ml-5">Total Users</p>
                <div className="flex items-center ml-5">
                    <b className="text-[1.31rem] inline-block font-open-sans text-black text-left w-[7.75rem]">$2,129,430</b>
                    <div className="ml-3">
                        <span className="rounded-[34px] bg-e9f9eb h-[1.5rem] text-center text-[0.63rem]  text-amber-400	 text-supportive-roshi-100 font-figtree font-semibold p-1">+2.5%</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero