// // Box.js
// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';

// function Text() {

// useEffect(() => {
//   gsap.to(".box", {
//     y: 100,
//     opacity: 10,
//     duration: 1,
//     stagger: 0.2
//   });
// }, []);


//   return (
//     <div flex className=" flex justify-center items-center h-screen gap-[20px]">
//         <div className="box w-[50px] h-[50px] bg-red-500" ></div>
//         <div className="box w-[50px] h-[50px] bg-red-500" ></div>
//         <div className="box w-[50px] h-[50px] bg-red-500"></div>

//     </div>
//   );
// }

// export default Text;

// task

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function CardList() {
  useEffect(() => {
        gsap.fromTo(".card", {
            opacity : 0,
            y : -50
        },
        {
            opacity : 1,
            y : 0,
            stagger : 0.2,
        }
        )}, []);

  return (
    <div className="p-10 space-y-4">
      <div className="card bg-white p-6 rounded shadow">Card 1</div>
      <div className="card bg-white p-6 rounded shadow">Card 2</div>
      <div className="card bg-white p-6 rounded shadow">Card 3</div>
      <div className="card bg-white p-6 rounded shadow">Card 4</div>
    </div>
  );
}

export default CardList;
