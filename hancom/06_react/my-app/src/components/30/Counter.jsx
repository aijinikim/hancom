import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            margin:"100px 0"
        }}>
        <button 
            style={{
                background:"blue",
                color:"white",
                width:"100px"
            }}onClick={() => setCount(c => c + 1)}>
            +1 버튼
        </button>
        <span style={{
            color:"white",
            fontSize:"20px",
            background:"red",
            width:"100px",
            padding:"20px",
            margin:"40px 0"
        }}>{count}</span>
        <button 
            style={{
                background:"blue",
                color:"white",
                width:"100px"
            }}
        onClick={() => setCount(c => c - 1)}>
            -1 버튼
        </button>
        <button 
            style={{
                background:"blue",
                color:"white",
                width:"100px",
                margin:"20px"
            }}
        onClick={() => setCount(0)}>
            리셋 버튼
        </button>
        </div>
    )
}
export default Counter 