import { useState, useEffect } from "react";

function formatDate(date) {
    if (!date) return '';

    const hour = `0${date.getHours()}`.slice(-2);
    const min = `0${date.getMinutes()}`.slice(-2);
    const sec = `0${date.getSeconds()}`.slice(-2);

    return `${hour}:${min}:${sec}`;
}

function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
