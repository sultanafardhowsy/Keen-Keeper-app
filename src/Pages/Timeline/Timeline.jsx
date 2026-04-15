import React, { useContext } from "react";
import { FreindContext } from "../../Context/freindContext";
import { FaPhone, FaVideo, FaRegCommentDots } from "react-icons/fa";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

const Timeline = () => {
  const { freindsData } = useContext(FreindContext);

const getIcon = (type) => {
  if (type === "call") return callIcon;
  if (type === "text") return textIcon;
  if (type === "video") return videoIcon;
};

  
  const getTitle = (type, name) => {
    if (type === "call") return `Call with ${name}`;
    if (type === "text") return `Text with ${name}`;
    if (type === "video") return `Video with ${name}`;
  };

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>

      {freindsData.length === 0 ? (
        <p>No activity yet</p>
      ) : (
        <div className="space-y-4">
          {freindsData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition container mx-auto"
            >
              <img
  src={getIcon(item.type)}
  alt={item.type}
  className="w-6 h-6"
/>

              {/* TEXT */}
              <div>
                <h3 className="font-semibold">
                  {getTitle(item.type, item.name)}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;


