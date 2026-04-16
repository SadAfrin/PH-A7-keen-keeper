import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { toast } from 'react-toastify';

import { RiAlarmSnoozeLine } from 'react-icons/ri';
import { FaArchive } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";

import { addToLocalDB } from '../../utils/localDB';

const FriendDetails = () => {
    const {friendParamId} = useParams();
    const friends = useLoaderData();
    if (!friends) return <div className="text-center py-20">Loading...</div>;/////////////////////////
    const expectedFriend = friends.find(friend => friend.id === parseInt(friendParamId));

    const { name, picture, status, tags, bio, days_since_contact, goal, next_due_date } = expectedFriend;

    const statusStyle =
    status === "overdue"
      ? "bg-red-500 text-white"
      : status === "almost due"
      ? "bg-yellow-600 text-white"
      : "bg-green-900 text-white";

    let formattedStatus = "";
    if (status === "overdue") {
    formattedStatus = "Overdue";
    } else if (status === "almost due") {
    formattedStatus = "Almost Due";
    } else {
    formattedStatus = "On-Track";
    }

    // toast handler
    const handleToastActions = (type) => {
        toast.success(`${type} with ${name}`);

        addToLocalDB(type, name);
    };

    // useEffect(() => {
    //     const allData = getAllFromLocalDB();
    //     console.log("All activities from local DB:", allData);
    // });


    return (
        <div className='bg-gray-50'>
            <div className="container mx-auto py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Left col: profile Card & action Buttons */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white rounded-2xl p-8 shadow-sm text-center border border-gray-100">
                                <img 
                                    src={picture} 
                                    alt={name} 
                                    className="w-24 h-24 rounded-full mx-auto  border-4 border-gray-50" 
                                />
                                <h2 className="text-2xl font-bold text-gray-800 mt-4">{name}</h2>
                                <div className="flex flex-col items-center gap-2 mt-2">
                                    <span className={`badge border-none text-white px-4 py-3 text-xs font-bold ${statusStyle}`}>
                                        {formattedStatus}
                                    </span>
                                    <span className="badge bg-green-100 text-green-700 border-none px-4 py-3 text-xs font-bold uppercase">
                                        {tags[0]}
                                    </span>
                                </div>
                                <p className="italic text-gray-500 mt-6 leading-relaxed">"{bio}"</p>
                                <p className="text-sm text-gray-400 mt-4">Preferred: email</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className="btn w-full bg-white hover:bg-gray-100 border-gray-200 text-gray-700 flex justify-center gap-3 normal-case font-semibold h-14 rounded-xl shadow-sm">
                                    <RiAlarmSnoozeLine size={22} /> Snooze 2 Weeks
                                </button>
                                <button className="btn w-full bg-white hover:bg-gray-100 border-gray-200 text-gray-700 flex justify-center gap-3 normal-case font-semibold h-14 rounded-xl shadow-sm">
                                    <FaArchive size={18} /> Archive
                                </button>
                                <button className="btn w-full bg-white hover:bg-red-50 border-gray-200 text-red-500 flex justify-center gap-3 normal-case font-semibold h-14 rounded-xl shadow-sm">
                                    <MdDelete size={22} /> Delete
                                </button>
                            </div>
                        </div>

                        {/* Right Col*/}
                        <div className="lg:col-span-8 space-y-6">
                            {/* starting row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                                    <h3 className="text-4xl font-bold text-green-900">{days_since_contact}</h3>
                                    <p className="text-gray-400 text-sm mt-2 font-medium">Days Since Contact</p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-4xl font-bold text-green-900">{goal}</h3>
                                    <p className="text-gray-400 text-sm mt-2 font-medium">Goal (Days)</p>
                                </div>
                                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                    <h3 className="text-[32px] font-bold text-green-900">
                                        {new Date(next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2 font-medium">Next Due</p>
                                </div>
                            </div>

                            {/* relationship goal card */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
                                <div>
                                    <h4 className="text-xl font-bold text-green-900">Relationship Goal</h4>
                                    <p className="mt-2 text-gray-600 font-medium text-lg">Connect every <span className="font-bold text-gray-900">{goal} days</span></p>
                                </div>
                                <button className="btn btn-sm bg-gray-100 border-gray-200 text-gray-600 px-6 py-2 text-sm rounded-lg hover:bg-gray-200">Edit</button>
                            </div>

                            {/* Quick Check-In Card */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="text-xl font-bold text-green-900 mb-8">Quick Check-In</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <button onClick={() => handleToastActions("Call")} className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100 group">
                                        <FiPhoneCall size={32} className="text-gray-700 group-hover:scale-110 transition-transform" />
                                        <span className="mt-3 font-bold text-gray-700">Call</span>
                                    </button>
                                    <button onClick={() => handleToastActions("Text")} className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100 group">
                                        <MdOutlineTextsms size={32} className="text-gray-700 group-hover:scale-110 transition-transform" />
                                        <span className="mt-3 font-bold text-gray-700">Text</span>
                                    </button>
                                    <button onClick={() => handleToastActions("Video")} className="flex flex-col items-center justify-center py-10 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all border border-gray-100 group">
                                        <IoVideocamOutline size={32} className="text-gray-700 group-hover:scale-110 transition-transform" />
                                        <span className="mt-3 font-bold text-gray-700">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;