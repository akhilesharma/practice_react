import React, { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleItem = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <div>
          <p>Add Your Content Here</p>
        </div>
      )}
      <button onClick={toggleItem}>{isVisible ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Toggle;
