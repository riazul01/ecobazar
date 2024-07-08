import { useState, useEffect } from 'react';

const useCountdown = (targetDateString: string) => {
    const [timeLeft, setTimeLeft] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const targetDate = Date.parse(targetDateString);

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft([0, 0, 0, 0]);
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft([days, hours, minutes, seconds]);
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDateString]);

    return timeLeft;
};

export default useCountdown;
