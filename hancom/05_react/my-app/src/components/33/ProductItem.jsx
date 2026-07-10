import { useState } from "react";

const ProductItem = ({name}) => {
    const [count, setCount] = useState(0)
    return (
        <div >
        <svg width="60" height="30" viewBox="0 0 60 30">
        </svg>

        <div margin="50px" padding="50px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" width="300" alt="nike" color="red"/>
        </div>
            
            <div className="product"
            style={{
                border:"1px" ,
                background:"green",
                color:"black",
                padding:"20px"
            }}
            >
                <h3>{name}</h3>
                <p>{count}개 담음</p>
            </div>
            <button style={{
                margin:"20px"
            }}
            onClick={() => setCount(c => c + 1)}>Product 담기</button>
        </div>
    )
}

export default ProductItem