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

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

// function CardList() {
//   useEffect(() => {
//         gsap.fromTo(".card", {
//             opacity : 0,
//             y : -50
//         },
//         {
//             opacity : 1,
//             y : 0,
//             stagger : 0.2,
//             duration: 1,
//              ease: "power2.out"

//         }
//         )}, []);

//   return (
//     <div className="p-10 space-y-4">
//       <div className="card bg-white p-6 rounded shadow">Card 1</div>
//       <div className="card bg-white p-6 rounded shadow">Card 2</div>
//       <div className="card bg-white p-6 rounded shadow">Card 3</div>
//       <div className="card bg-white p-6 rounded shadow">Card 4</div>
//     </div>
//   );
// }

// export default CardList;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  useEffect(() => {
    gsap.to(".scroll-box", {
      scrollTrigger: {
        trigger: ".scroll-box", // the element that triggers the animation
        start: "top 50%",       // when top of .scroll-box hits 80% of viewport
        toggleActions: "play none none none", // onEnter, onLeave, onEnterBack, onLeaveBack
      },
        opacity: 0,
        y: 50,
        duration: 20
    });
  }, []);
//  useEffect(() => {
//         gsap.fromTo(".scroll-box", {
//             opacity : 0,
//             y : -50
//         },
//         {
//             opacity : 1,
//             y : 0,
//             stagger : 0.2,
//             duration: 1,
//              ease: "power2.out"

//         }
//         )}, []);


  return (
    <div className="h-[200vh] p-10 bg-gray-100">
      <div className="scroll-box bg-blue-500 text-white p-10 text-center rounded shadow-md hover:bg-amber-300 items-center w          ease-in-out duration-1000">
        👋 I fade in when you scroll to me!
      </div>
    </div>
  );
}

export default ScrollSection;
