import { useState } from "react";
import { FreindContext } from "./freindContext";

const FreindsProvider = ({ children }) => {
  const [freindsData, setFreindsData] = useState([]);

  const formatDate = () => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

  const handleCall = (currentFreind) => {
  const newEntry = {
    id: Date.now(),
    name: currentFreind.name,
    type: "call",
    date: formatDate(),
  };

  setFreindsData((prev) => [...prev, newEntry]);
};

    const handleText = (currentFreind) => {
  const newEntry = {
    id: Date.now(),
    name: currentFreind.name,
    type: "text",
    date: formatDate(),
  };

  setFreindsData((prev) => [...prev, newEntry]);
};

const handleVideo = (currentFreind) => {
  const newEntry = {
    id: Date.now(),
    name: currentFreind.name,
    type: "video",
    date: formatDate(),
  };

  setFreindsData((prev) => [...prev, newEntry]);
};

  const data = {
    freindsData,
    setFreindsData,
    handleCall,
    handleText,
    handleVideo
  };

  return (
    <FreindContext.Provider value={data}>
      {children}
    </FreindContext.Provider>
  );
};

export default FreindsProvider;