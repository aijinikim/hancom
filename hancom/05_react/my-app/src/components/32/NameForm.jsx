import { useState } from "react";

const NameForm = () => {
    const [form, setName] = useState({name1: "철수", name2: "대진"})
    return (
        <>
        <input value={form.name1}
         onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <p>안녕, {form.name1}!</p>
        <br/>
        <input value={form.name2}
         onChange={(e) => setName(e.target.value)}
        />
        <p>안녕, {form.name2}!</p>
        </>
    )
}
export default NameForm