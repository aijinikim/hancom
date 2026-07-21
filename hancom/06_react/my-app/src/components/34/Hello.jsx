import { useEffect } from "react";

const Hello = () => {
    useEffect (() => {
        console.log("화면 뜰때 한번 실행")
    }, [])
    return <p>안녕하세요.</p>
}

export default Hello