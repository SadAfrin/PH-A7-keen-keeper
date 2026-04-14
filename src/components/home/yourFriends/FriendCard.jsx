import React from 'react';

const FriendCard = ({ friend }) => {
    const { name, picture, status, tags, days_since_contact } = friend;

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

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
      
            <div className="flex justify-center">
                <img
                src={picture}
                alt={name}
                className="w-20 h-20 rounded-full object-cover"
                />
            </div>

            {/* Name */}
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {name}
            </h2>

            {/* Days */}
            <p className="text-sm text-gray-400 mt-1">
                {days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex justify-center gap-2 mt-3 flex-wrap">
                {tags?.map((tag, index) => (
                <span
                    key={index}
                    className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium"
                >
                    {tag.toUpperCase()}
                </span>
                ))}
            </div>

            {/* Status */}
            <div className="mt-3">
                <span
                className={`px-3 py-1 rounded-full font-semibold ${statusStyle}`}
                >
                {formattedStatus}
                </span>
            </div>
        </div>
    );
};

export default FriendCard;