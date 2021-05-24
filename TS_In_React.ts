import * as React from 'react';
interface UserThumbnailProps {
    img: string;
    alt: string
    url: string
}

// export const UserThumbnail = (props = userThumbnailProps) => {
//     <a href={props.url}>
//         <img src={props.img} alt={props.alt} />
//     </a>
// }

// Array destructuring

let input = [1,2,3]
// let [first, sec] = input
// console.log(first);
// console.log(sec);

let [first, ...rest] = [1,2,3,4,5]
console.log(first);
console.log(rest);


// Tupel destructuring
let tuple: [number, string, boolean] = [7, "hello", true];

let [a, b, c] = tuple; // a: number, b: string, c: boolean