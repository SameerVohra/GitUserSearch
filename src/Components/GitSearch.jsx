import { useState } from "react";
import { Link } from "react-router-dom";
import './UserCard.css';

export default function GitSearch() {
    const [userName, setUserName] = useState("");
    const [users, setUsers] = useState({});

    function getUser(event) {
        event.preventDefault();

        fetch(`https://api.github.com/users/${userName}`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }

    function handleInput(event) {
        setUserName(event.target.value);
    }

    return (
        <>
        <div id="nav-bar">
            <div id="logo"><h1>GitHub User Search</h1>
            <p>&copy; Sameer Vohra</p>
            </div>
            <div id="srch">
                <form className="form" onSubmit={getUser}>
                    <label htmlFor="query" className="label"></label>
                    <input
                        type="text"
                        name="query"
                        className="input"
                        placeholder="Search User"
                        value={userName}
                        onChange={handleInput}
                    />
                    <button type="submit" className="button">SEARCH</button>
                </form>
            </div>
            </div>

            {Object.keys(users).length > 0 && (
                <div id="container">
                    <div id="card">
                        <div id="image">
                            <img src={users.avatar_url} alt="" />
                        </div>
                        <div id="details">
                            <p>Name: {users.name}</p>
                            <p>Username: <span className="Uname">{users.login}</span></p>
                        </div>
                        <div id="button">
                            <Link to={`/userinfo/${users.login}`}><button>Know More</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
    
}
