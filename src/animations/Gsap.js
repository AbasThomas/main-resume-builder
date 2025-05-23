import gsap from "gsap";
// import { SplitText } from "gsap/ all";

// gsap.registerPlugin(SplitText)

// let split = SplitText.create('.create', {
//     type : 'chars,words',
// });

// gsap.from(split.chars,{
//     yPercent : 'random([])',
//     autoAlpha : 0,
//     yoyo : true,
//     repeat : -1,
//     stagger: {
//         amount :0.5,
//         from : 'random'
//     }
// });
export function Gsap() {
    gsap.to(".box", { x: 200 })
}