

import { useContext } from "react";
import { FreindContext } from "../../Context/freindContext";

const CardSection = () => {
  const { friends, freindsData } = useContext(FreindContext);


  const totalFriends = friends.length;
  const totalInteractions = freindsData.length;

  const onTrack = friends.filter(friend => friend.status === "on-track").length;

  const needAttention = totalFriends - onTrack;

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

      {/* Total Friends */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {totalFriends}
        </h2>
        <p className="text-gray-500 mt-1">Total Friends</p>
      </div>

      {/* On Track */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {onTrack}
        </h2>
        <p className="text-gray-500 mt-1">On Track</p>
      </div>

      {/* Need Attention */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {needAttention}
        </h2>
        <p className="text-gray-500 mt-1">Need Attention</p>
      </div>

      {/* Interactions */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {totalInteractions}
        </h2>
        <p className="text-gray-500 mt-1">
          Interactions This Month
        </p>
      </div>

    </div>
  );
};

export default CardSection;