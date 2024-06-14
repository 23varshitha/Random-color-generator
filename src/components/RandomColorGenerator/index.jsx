import { useEffect, useState } from "react"

export default function RandomColor(){
    const [typeOfColor,setTyprOfColor]=useState("hex");
    const[color,setColor]=useState("#000000");
    function randomHexColor(length){
        return Math.floor(Math.random()*length);
    }
    function generateHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor="#";
        for(let i=0;i<6;i++){
            hexColor+=hex[randomHexColor(hex.length)]
        }
        setColor(hexColor);
    }
    function generateRgbColor(){
        const r = randomHexColor(256);
        const g = randomHexColor(256);
        const b = randomHexColor(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    // eslint-disable-next-line 
    useEffect(()=>{
        if(typeOfColor==='rgb') generateRgbColor();
        else generateHexColor();
        // eslint-disable-next-line
    },[typeOfColor])
    return(
        <div style={
            {
                height:'100vh',
                width:'100vw',
                backgroundColor:color
            }
        }>
            <center>
            <button onClick={()=>setTyprOfColor('hex')} >Generate HEX Color</button>
            <button onClick={()=>setTyprOfColor('rgb')}>Generate RGB Color</button>
            <button onClick={typeOfColor==='hex' ? generateHexColor : generateRgbColor }>Generate Random Color</button>
            
            <div>
                <h1>{typeOfColor==='rgb' ? "RGB Color" : "HEX Color"}</h1>
                <h1>{color}</h1>
            </div>
            </center>
        </div>
    )
}