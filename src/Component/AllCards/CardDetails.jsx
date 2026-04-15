import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {

  

  const { name,picture, days_since_contact, tags, status } = friend;

  const statusStyles = {
  "overdue": "bg-red-500 text-white",
  "on-track": "bg-green-500 text-white",
  "almost due": "bg-yellow-500 text-white",
};

  return (
    <Link to={`/fdetails/${friend.id}`}>
    <div className="bg-white rounded-3xl shadow-md px-4 py-8 w-80 text-center container mx-auto">

  

       <figure className='p-6'>
    <img
      src={picture}
      alt="" className="w-20 h-20 mx-auto rounded-full object-cover"/>
  </figure>

      {/* Name */}
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        {name}
      </h2>

      {/* Last Contact */}
      <p className="text-sm text-gray-500">
        {days_since_contact} day ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

     {/* Status */}
<div className="mt-4">
  <span
    className={`text-xs px-3 py-1 rounded-full ${
      statusStyles[status.toLowerCase()] || "bg-gray-100 text-gray-600"
    }`}
  >
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
</div>

    </div>
    </Link>
  );
};

export default FriendCard;