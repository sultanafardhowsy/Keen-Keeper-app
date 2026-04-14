import React, { use } from 'react';
import FriendCard from './CardDetails';

const freindsPromise = fetch('/freinds.json').then(res => res.json())

const AllCards = () => {
   
         const freinds = use(freindsPromise);
 

    return (
        <div className='container mx-auto'>
          <h2 className='font-bold text-4xl pt-6 mb-10'> Your Freinds</h2>
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  
            {
            freinds.map((friend,ind) =>{
                return  <FriendCard friend={friend} key={ind}/>
              })
          }  
          </div>
        </div>
    
    );
};

export default AllCards;