import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './UserPage.css';

export default function UserInfo() {
    const [userDetails, setUserDetails] = useState({});
    const {username} = useParams();
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const url = `https://api.github.com/users/${username}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setUserDetails(data));
    }, [username]);

    useEffect(() => {
        const reposUrl = `https://api.github.com/users/${username}/repos`;

        fetch(reposUrl)
            .then(res => res.json())
            .then(data => setRepos(data));
    }, [username]);

    useEffect(() => {
        const Followerurl = `https://api.github.com/users/${username}/followers`

        fetch(Followerurl)
            .then(res => res.json())
            .then(data => setFollowers(data));

    }, [username]);

    return (
        <>
<div id="container">
        <div id="head-bar">
            <div id="image">
            <img src={userDetails.avatar_url} alt="" />
            </div>

            <div id="deatils">
            <p>Username: {userDetails.login}</p>
            <p>Name: {userDetails.name}</p>
            <p>Total Followers: {userDetails.followers}</p>
            <p>Total Following: {userDetails.following}</p>
            <p>Total Repositories: {userDetails.public_repos}</p>
            </div>
            </div>
            </div>

            <div id="repoFollow">

                <div id="repo">
            <p>Name of all the Repositories</p>
            <ul>
                { repos.map(repo => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </ul>
            </div>

            <div id="follow">

            <p>Name of all the followers</p>
            <ul>
                { followers.map(follower => (
                    <li key={follower.id}>{follower.login}</li>
                ))}
            </ul>
            </div>
            </div>
        </>
    );
}
