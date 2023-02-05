import { useState } from "react";
import './Rsg.css'
let adjustInterval=undefined;
function Stopwatch()
{
    const [watch,setwatch]=useState(0)
    const [started,setstarted]=useState(false)
    const Startwatch=()=>{
        adjustInterval=setInterval(()=>{
            setwatch((x)=>x+1);
        },1000
        )
        setstarted(true)
    }
    const Stopwatch=()=>{
        clearInterval(adjustInterval)
        setstarted(false)
        
    }
    const Resettwatch=()=>{
        setwatch(0)
        clearInterval(adjustInterval)
        setstarted(false)
    }
    return(
        <div>
            <h1>stopwatch</h1>
            <h1 className="wtc">{watch}</h1>
            <button className="start" disabled={started} onClick={Startwatch}>start</button>
            <button className="stop" onClick={Stopwatch}>stop</button>
            <button className="reset" onClick={Resettwatch}>reset</button>
        </div>
    )
}export default Stopwatch;