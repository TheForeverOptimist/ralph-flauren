import React, { useEffect, useState } from 'react'

export default function TopNav(){
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

    const messages = [
      {
        text: "Raise awareness about breast cancer here:  ",
        link: "https://www.nationalbreastcancer.org/breast-cancer-awareness-month/",
      },
      {text: "Get healthier with our Fitness Partner:  ", link: "https://elevate.app"}
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 8000);

        return() => clearInterval(interval)
    }, []);
    
    
    return (
      <div
        id="TopNav"
        className="fixed z-30 flex m-0 h-[7vh] bg-blue-950 w-full border-b text-white items-center justify-center"
      >
        <div className="flex">
          {messages[currentMessageIndex].text}
          <a className='underline hover:text-pink-500 ml-2' href={messages[currentMessageIndex].link}>details</a>
        </div>
      </div>
    );
}