import React from 'react';
import FriendCard from './FriendCard';
import { useLoaderData, useNavigation } from 'react-router';

const AllFriends = () => {
    const friends = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
    return (
        <div className="flex justify-center items-center min-h-[300px] flex-col gap-4">
            <p className="text-green-900 font-medium">Friends Loading...</p>
            <span className="loading loading-spinner loading-lg text-green-900"></span>
        
        </div>
        );
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-2xl font-bold max-w-6xl mx-auto mb-8">Your Friends</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {
                    friends.map(friend => (
                        <FriendCard key={friend.id} friend={friend} />
                    ))
                }
            </div>
        </div>
    );
};

export default AllFriends;