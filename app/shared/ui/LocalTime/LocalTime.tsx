'use client'

import { useEffect, useState } from "react";

const LocalTime = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat("ru-RU", {
                timeZone: "Europe/Moscow",
                hour: "2-digit",
                minute: "2-digit"
            });

            setTime(formatter.format(new Date()));
        }

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="local-time">
            Местное время – {time}
        </div>
    );
}

export default LocalTime;