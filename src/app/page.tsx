"use client";
import { useState, ChangeEvent } from "react";

export default function Home() {
    const [userName, setUserName] = useState<string>("");

    const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const firstFunction = () => alert(userName);

    return (
        <div>
            <input type="text" onChange={handleUserNameChange} />
            <button onClick={firstFunction}>入力してね</button>
        </div>
    );
}
