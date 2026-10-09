import React, { useEffect, useState } from 'react';

interface LocalTimeProps {
      timeZone: string;
}

const format = (timeZone: string): string =>
      new Intl.DateTimeFormat('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone,
      }).format(new Date());

/** A tiny live clock showing the time where I am, so visitors know when I'm awake. */
const LocalTime: React.FC<LocalTimeProps> = ({ timeZone }) => {
      const [time, setTime] = useState<string>(() => format(timeZone));

      useEffect(() => {
            const id = window.setInterval(() => setTime(format(timeZone)), 30_000);
            return () => window.clearInterval(id);
      }, [timeZone]);

      return <time dateTime={time}>{time}</time>;
};

export default LocalTime;
