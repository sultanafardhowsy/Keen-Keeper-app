import React, { useEffect, useState } from 'react';
import FriendCard from './CardDetails';
import { FadeLoader } from 'react-spinners';
import CardSection from '../../Pages/Homepage/CardSection'

const AllCards = () => {
  const [freinds, setFreinds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/freinds.json')
      .then(res => res.json())
      .then(data => {
        setFreinds(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container mx-auto'>
      <h2 className='font-bold text-4xl pt-6 mb-10'>Your Friends</h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <FadeLoader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freinds.map((friend, ind) => (
            <FriendCard friend={friend} key={ind} />
          ))}
        </div>
      )}
     
    </div>
  );
};

export default AllCards;