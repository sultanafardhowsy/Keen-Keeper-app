
import { useLoaderData, useParams } from "react-router-dom";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaBoxArchive } from "react-icons/fa6"
import deleteIcon from "../../assets/6861362.png"
import call from "../../assets/call.png"
import text from "../../assets/text.png"
import vedio from "../../assets/video.png"

const FriendDetails = () => {
  
  const { id} = useParams();
  console.log(id,'params');
 const friends = useLoaderData();
 console.log(friends);
  const expectedFriend = friends.find((friend) => friend.id == id)
  console.log(expectedFriend);
 const {name,picture,days_since_contact,goal,bio,status,email,tags,next_due_date} = expectedFriend;
 const statusStyles = {
  "overdue": "bg-red-500 text-white",
  "on-track": "bg-green-500 text-white",
  "almost due": "bg-yellow-500 text-white",
};

const formatDate = (dateStr) => {
  if (!dateStr) return "Invalid date";

  const date = new Date(dateStr);

  if (isNaN(date)) return "Invalid date";

  return date.toLocaleDateString("en-US", {
    month: "long",   // April
    day: "2-digit",  // 02
    year: "numeric", // 2026
  });
};

const handleCall =(expectedFriend) =>{
  console.log(expectedFriend,'id');
}

const handleText =(id) =>{
  console.log(id,'id');
}

const handleVideo =(id) =>{
  console.log(id,'id');
}

  return (
    <div className="container mx-auto flex justify-between mt-4">
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure className='p-6'>
    <img
      src={picture}
      alt="" className="w-20 h-20 mx-auto rounded-full object-cover"/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="text-3xl font-bold">{name}</h2>
   
    <div className="mt-4">
  <span
    className={`text-xs px-3 py-1 rounded-full ${
      statusStyles[status.toLowerCase()] || "bg-gray-100 text-gray-600"
    }`}
  >
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
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
</div>
<p className="font-bold">"{bio}"</p>
    <p>Preferred: {email}</p>
  </div>
  <button className="btn btn-xl mt-5"><RiNotificationSnoozeLine />Snooze 2 weeks</button>
  <button className="btn btn-xl mt-5"><FaBoxArchive />Archive</button>
  <button className="btn btn-xl mt-5"><img src={deleteIcon} alt="" className="w-6 h-6"/> Delete</button>
</div>
      
   <div className="ml-5">
    <div className="flex justify-between gap-5 mt-10">
     <div>
      <div className="card w-86 bg-base-100 card-sm shadow-sm">
  <div className="card-body items-center py-10">
    <h2 className="text-4xl font-bold">{days_since_contact}</h2>
    <p className="font-bold">Days Since Contact</p>
    
  </div>
</div>

    </div>
     <div>
      <div className="card w-86 bg-base-100 card-sm shadow-sm">
  <div className="card-body items-center py-10">
    <h2 className="text-4xl font-bold">{goal}</h2>
    <p className="font-bold">Goal ( DAYS )</p>
    
  </div>
</div>

    </div>
    <div className="grid grid-cols-1">
     <div className="">
      <div className="card w-86 bg-base-100 card-sm shadow-sm">
  <div className="card-body items-center py-10">
    <h2 className="card-title text-3xl font-bold">{formatDate(next_due_date)}</h2>
    <p className="font-bold">Next Due</p>
    
  </div>
</div>

    </div>
   </div>
   </div>
   <div className="card card-border bg-base-100 ">
  <div className="card-body grid grid-cols-2 w-296">
    <div className="">
      <h2 className="card-title text-2xl font-bold">Relationship Goal</h2>
    <p className="font-bold">Connect every <span className="font-bold text-xl">{goal} days</span></p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-nutral">Edit</button>
    </div>
  </div>
</div>
<div className="grid grid-cols-3">
  <div>
      <div className="card w-86 bg-base-100 card-sm shadow-sm py-10">
  <button
  onClick={() => handleCall(expectedFriend)}
  className="card-body items-center w-full text-center cursor-pointer hover:bg-gray-100 transition rounded-xl"
>
  <figure>
    <img src={call} alt="" className="w-6 h-6" />
  </figure>
  <p className="font-bold">Call</p>
</button>
</div>

    </div>
      <div className="">
      <div className="card w-86 bg-base-100 card-sm shadow-sm py-10">
  <button
  onClick={() => handleText(id)}
  className="card-body items-center w-full text-center cursor-pointer hover:bg-gray-100 transition rounded-xl"
>
  <figure>
    <img src={text} alt="" className="w-6 h-6" />
  </figure>
  <p className="font-bold">Text</p>
</button>
</div>

    </div>
      <div>
      <div className="card w-86 bg-base-100 card-sm shadow-sm py-10">
  <button
  onClick={() => handleVideo(id)}
  className="card-body items-center w-full text-center cursor-pointer hover:bg-gray-100 transition rounded-xl"
>
  <figure>
    <img src={vedio} alt="" className="w-6 h-6" />
  </figure>
  <p className="font-bold">Video</p>
</button>
</div>

    </div>  
</div>
<div className="container mx-auto bg-base-100 card-sm shadow-sm ">
  <div className="flex justify-between mt-10 ">
    <h2 className="text-xl font-bold">Recent Interactions</h2>
    <div className="flex justify-between gap-1">
      <figure className=''>
    <img
      src={vedio}
      alt="" className="w-6 h-6"/>
  </figure>
  <p className="font-bold">Full History</p>
    </div>
  </div>
  <div className="flex justify-between mt-10">
    <div>
      <figure className=''>
    <img
      src={call}
      alt="" className="w-6 h-6"/>
  </figure>
    <p className="font-bold">Call</p>
    </div>
    <p className="font-bold">Feb 26, 2026</p>
  </div>
  <div className="flex justify-between mt-10">
    <div>
      <figure className=''>
    <img
      src={vedio}
      alt="" className="w-6 h-6"/>
  </figure>
    <p className="font-bold">Vedio</p>
    </div>
    <p className="font-bold">Feb 26, 2026</p>
  </div>
  <div className="flex justify-between mt-10">
    <div>
      <figure className=''>
    <img
      src={text}
      alt="" className="w-6 h-6"/>
  </figure>
    <p className="font-bold">Text</p>
    </div>
    <p className="font-bold">Feb 26, 2026</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default FriendDetails;