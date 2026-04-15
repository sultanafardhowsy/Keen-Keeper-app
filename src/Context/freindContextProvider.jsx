import { useState } from "react";
import { FreindContext } from "./freindContext";

const FreindsProvider = ({ children }) => {
  const [freindsData, setFreindsData] = useState([]);

  const data = {
    freindsData,
    setFreindsData,
  };

  return (
    <FreindContext.Provider value={data}>
      {children}
    </FreindContext.Provider>
  );
};

export default FreindsProvider;