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

// functional components
type AppProps = {
    message: string;
}

const App = ({message}: AppProps) => <div>{message}</div>;

const App2 = ({message}: AppProps): JSX.Element => <div>{message}</div>;
// inline
const app = ({message}: {message: string}) => <div>{message}</div>;

// use reducer

const initialState = {count: 0}

type ACTIONTYPE = 
    | {type: "increment"; payload: number}
    | {type: "decrement"; payload: string};

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
        case "increment":
            return {count: state.count + action.payload}
        case "decrement":
            return {count: state.count - Number(action.payload)}
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: "decrement", payload: "5"})}>-</button>
            <button onClick={() => dispatch({type: "increment", payload: 5})}>+</button>
        </>
    )
}