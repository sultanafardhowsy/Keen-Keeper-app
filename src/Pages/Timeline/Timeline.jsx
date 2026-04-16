import React, { useContext, useState } from "react";
import { FreindContext } from "../../Context/freindContext";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";
import { div } from "framer-motion/client";

const Timeline = () => {
  const { freindsData } = useContext(FreindContext);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

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

  // 🔥 Filter + Search + Sort
  const processedData = freindsData
    .filter((item) => {
      const matchesType = filter === "all" || item.type === filter;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase());

      return matchesType && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortOrder === "latest"
        ? dateB - dateA
        : dateA - dateB;
    });

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>

      {/* 🔍 + 🔽 + 🔃 Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between">
         
        

      <div className="dropdown dropdown-center w-full sm:w-1/3">
  <div
    tabIndex={0}
    role="button"
    className="w-full px-4 py-3 rounded-xl bg-gray-100 text-left cursor-pointer hover:bg-gray-200 transition"
  >
    Filter: {filter.charAt(0).toUpperCase() + filter.slice(1)} ⬇️
  </div>

  <ul
    tabIndex={0}
    className="dropdown-content menu bg-white rounded-xl z-10 w-full p-2 shadow-md"
  >
    {/* <li>
      <a onClick={() => setFilter("all")}>All</a>
    </li> */}
    <li>
      <a onClick={() => setFilter("call")}>Call</a>
    </li>
    <li>
      <a onClick={() => setFilter("text")}>Text</a>
    </li>
    <li>
      <a onClick={() => setFilter("video")}>Video</a>
    </li>
  </ul>
</div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        />

        
        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {processedData.length === 0 ? (
        <div className="min-h-40">
          <p className="text-gray-500 font-bold text-center mt-20">No activity found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {processedData.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              {/* ICON */}
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