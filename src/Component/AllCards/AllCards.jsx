
import React, { useContext } from 'react';
import FriendCard from './CardDetails';
import { FadeLoader } from 'react-spinners';
import { FreindContext } from '../../Context/freindContext';

const AllCards = () => {
  const { friends } = useContext(FreindContext);

  return (
    <div className='container mx-auto'>
      <h2 className='font-bold text-4xl pt-6 mb-10'>Your Friends</h2>

      {!friends || friends.length === 0 ? (
        <div className="flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard friend={friend} key={friend.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCards;