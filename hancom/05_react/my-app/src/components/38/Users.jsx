import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => setUsers(data)).catch((error) => console.error("데이터 로딩 실패 :", error))
    }, [])

    return (
        <>
        <ul>
            {users.map((u) => (
                <li key={u.id}
                style={{
                    color:"black"
                }}
                >
                    이름 : {u.name},
                    <br></br>
                    <div
                    style={{
                        color:"white",
                        background:"black",
                        width:"300px",
                        margin:"0 auto",
                        borderRadius:"14px"
                        // display:"center",
                        // alignItems:"center",
                        // justifyItems:"center",
                        // justifyContent:"center",
                        // alignContent:"center"
                        }}>
                        회사명 : {u.company.name}
                    </div>
                    <br/>
                    <br/>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Users