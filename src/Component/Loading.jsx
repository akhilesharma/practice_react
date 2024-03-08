import React, { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? "Loading..." : "Start Loading"}
      </button>

      {isLoading && <h1> Loading...</h1>}
    </div>
  );
};

export default Loading;
