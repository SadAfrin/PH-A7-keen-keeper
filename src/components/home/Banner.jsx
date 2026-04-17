import React from 'react';
import { HiPlus } from "react-icons/hi2";
import { useLoaderData } from 'react-router';

const Banner = () => {
    const friends = useLoaderData();
    const onTrackCount = friends.filter(friend => friend.status === 'on-track').length;

    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="container mx-auto text-center">
        
                <div className="mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="opacity-70 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn bg-green-900 hover:bg-green-800 text-white border-none px-8 rounded-lg flex items-center gap-2 mx-auto transition-all">
                        <HiPlus className="text-xl" />
                        Add a Friend
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto border-b border-gray-300 pb-12">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-green-900 mb-2">{friends.length}</h2>
                        <p className="text-slate-500 font-medium">Total Friends</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-green-900 mb-2">{onTrackCount}</h2>
                        <p className="text-slate-500 font-medium">On Track</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-green-900 mb-2">6</h2>
                        <p className="text-slate-500 font-medium">Need Attention</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-bold text-green-900 mb-2">12</h2>
                        <p className="text-slate-500 font-medium">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;