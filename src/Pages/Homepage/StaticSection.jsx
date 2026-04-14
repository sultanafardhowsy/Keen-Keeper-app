import React from 'react';

const StaticSection = () => {
    return (
         <div class="container mx-auto text-center border border-dashed border-gray-300 p-10 rounded-lg bg-white">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>
      <p class="text-gray-500 mb-6 max-w-xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button class="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition">
        + Add a Friend
      </button>
    </div>
    );
};

export default StaticSection;