import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 p-3 bg-neutral bg-opacity-50 text-white rounded-lg shadow-lg text-xl">
      {time}
    </div>
  );
};

export default Clock;
