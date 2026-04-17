
import { useEffect, useState } from "react";
import { FreindContext } from "./freindContext";
import { toast } from "react-toastify";

const FreindsProvider = ({ children }) => {
 
  const [friends, setFriends] = useState([]);

  const [freindsData, setFreindsData] = useState([]);

  useEffect(() => {
    fetch("/freinds.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

 
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
    toast.success(`Called ${currentFreind.name}`);
  };

  const handleText = (currentFreind) => {
    const newEntry = {
      id: Date.now(),
      name: currentFreind.name,
      type: "text",
      date: formatDate(),
    };

    setFreindsData((prev) => [...prev, newEntry]);
    toast.success(`Text sent to ${currentFreind.name}`);
  };

  const handleVideo = (currentFreind) => {
    const newEntry = {
      id: Date.now(),
      name: currentFreind.name,
      type: "video",
      date: formatDate(),
    };

    setFreindsData((prev) => [...prev, newEntry]);
    toast.success(`Video call done with ${currentFreind.name}`);
  };

 
  const data = {
    friends,          
    freindsData,      
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <FreindContext.Provider value={data}>
      {children}
    </FreindContext.Provider>
  );
};

export default FreindsProvider;