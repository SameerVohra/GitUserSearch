import { useState } from "react";
import './GitSearch.css'
import MainPage from "./MainPage";

export default function GitSearch(){
    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState({});

    function getUser(event){
        event.preventDefault();
        const url=`https://api.github.com/users/${userName}`

        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    function handleInput(event){
        setUserName(event.target.value);
        console.log(event.target.value);
    }
    return(
        <>
        
        <div id="logo"><h1>GitHub User Search</h1></div>
        <div id="srch">
        <form className="form" onSubmit={getUser}>

            <label htmlFor="query" className="label" ></label>
            <input type="text" name="query" className="input" placeholder="Search User" 
            value={userName} onChange={handleInput}
            />

            <button type="submit" className="button">SEARCH</button>
        </form>
        </div>
        
        <div id="container">
        <div id="card">
            <div id="image">
           <img src={users.avatar_url} alt="" />
           </div>
           <div id="details">
            <p>Username: {users.login}</p>
            <p>Name: {users.name}</p>
            <p>Total Followers: {users.followers}</p>
            <p>Total Following: {users.following}</p>
            <p>Total Repositories: {users.public_repos}</p>
            </div>
            <div id="know-more"><a href="MainPage"><button>Know More</button></a></div>
        </div>
        </div>
        </>
    )
}