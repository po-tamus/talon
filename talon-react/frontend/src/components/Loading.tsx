import { useState } from "react";
import '../styles/Loading.css'

export default function Loading() {

    const astArr = ["", ".", "..", "..."];
    const [index, setIndex] = useState(0);
    const [asterisks, setAsterisks] = useState(astArr[index]);

    const astHandler = () => {
        setIndex((index + 1)%astArr.length)
        setAsterisks(astArr[index]);
    }

    setInterval(astHandler, 2000);

    return (
        <div>
            <button onClick={astHandler}>click to change the asterisks</button>
            <h1 className="loading-text" >Loading{asterisks}</h1>
        </div>
    );   
}
