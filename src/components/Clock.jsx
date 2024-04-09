import React, { useEffect, useState } from 'react'

export const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const year = time.getFullYear();
    const month = ('0' + (time.getMonth() + 1)).slice(-2);
    const day = ('0' + time.getDate()).slice(-2);
    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);
    const seconds = ('0' + time.getSeconds()).slice(-2);

  return (
    <div>
    <h2 className='reloj-titulo'>{year}-{month}-{day}</h2>
    <h2 className='reloj-titulo-light'>{hours}:{minutes}:{seconds}</h2>
    </div>
  )
}
