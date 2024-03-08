import React, { useState } from "react";

const Toggle = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleItem = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          obcaecati?
        </p>
      </div>
      {isVisible && (
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            perferendis.
          </p>
        </div>
      )}
      <button onClick={toggleItem}>
        {isVisible ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default Toggle;
