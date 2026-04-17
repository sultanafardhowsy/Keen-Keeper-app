
import { FreindContext } from '../../Context/freindContext';


const CardSection = () => {

   


  return (

    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">

      <div class="bg-white shadow rounded-lg p-6 text-center w-80">
        <h2 class="text-2xl font-bold text-gray-800">9</h2>
        <p class="text-gray-500 mt-1">Total Friends</p>
      </div>


      <div class="bg-white shadow rounded-lg p-6 text-center w-80">
        <h2 class="text-2xl font-bold text-gray-800">3</h2>
        <p class="text-gray-500 mt-1">On Track</p>
      </div>


      <div class="bg-white shadow rounded-lg p-6 text-center w-80">
        <h2 class="text-2xl font-bold text-gray-800">6</h2>
        <p class="text-gray-500 mt-1">Need Attention</p>
      </div>


      <div class="bg-white shadow rounded-lg p-6 text-center w-80">
        <h2 class="text-2xl font-bold text-gray-800">12</h2>
        <p class="text-gray-500 mt-1">Interactions This Month</p>
      </div>

    </div>


  );
};

export default CardSection;

