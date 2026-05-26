import { useEffect, useState } from "react";

const pad = (value: number) => String(value).padStart(2, "0");

export const useCountdown = (duration: number) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        // restart automatically
        if (prev <= 1000) return duration;

        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
};
