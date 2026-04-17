import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

const Timeline = () => {
    const allActivities = useLoaderData() || [];
    
    const [filter, setFilter] = useState('All');

    // Filter logic
    const filteredActivities = filter === 'All' 
        ? allActivities 
        : allActivities.filter(item => item.category === filter);

    // Icon helper function
    const getIcon = (category) => {
        switch (category) {
            case 'Call': return <FiPhoneCall size={28} className="text-green-800" />;
            case 'Text': return <MdOutlineTextsms size={28} className="text-indigo-800" />;
            case 'Video': return <IoVideocamOutline size={32} className="text-pink-800" />;
            default: return null;
        }
    };

    return (
        <div className="container mx-auto max-w-7xl py-10 px-4">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Timeline</h2>

            {/* Filter Dropdown */}
            <div className="mb-8">
                <select 
                    onChange={(e) => setFilter(e.target.value)}
                    className="select select-bordered w-full max-w-xs bg-white border-gray-200 text-gray-600 text-lg focus: outline-none"
                >
                    <option value="All">Filter timeline</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>
            </div>

            {/* Activities List */}
            <div className="space-y-5">
                {filteredActivities.length > 0 ? (
                    filteredActivities.map((item) => (
                        <div 
                            key={item.activityId} 
                            className="flex items-center gap-5 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-xl"
                        >
                            <div className="p-3 bg-gray-50 rounded-xl">
                                {getIcon(item.category)}
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    {item.category} <span className="font-normal text-gray-400">with {item.friendName}</span>
                                </h3>
                                <p className="text-base text-gray-400 mt-1">{item.timestamp}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-gray-100 rounded-2xl border-2 border-gray-200">
                        <p className="text-gray-800 font-semibold text-3xl">No {filter !== 'All' ? filter : ''} history found!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;