import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();

  let greeting;

  if (hours >= 5 && hours < 12) {
    greeting = "Morning!";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Afternoon!";
  } else {
    greeting = "Evening!";
  }

  return <div className="text-center text-sm">{greeting}</div>;
};

export default Greeting;
