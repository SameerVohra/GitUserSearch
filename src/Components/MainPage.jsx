import { useState } from "react";
import './MainPage.css'
export default function MainPage(){
    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState({});

    function getUser(event){
        event.preventDefault();
        const url=`https://api.github.com/users/${userName}`

        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    return(
        <>
        </>
    )
}