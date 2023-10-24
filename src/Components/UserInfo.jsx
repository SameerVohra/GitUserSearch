import React from "react";

export default function UserInfo(props) {
  const { repositories, followers, following, bio } = props;

  return (
    <div>
      <h1>User Info</h1>
      <h2>Repositories:</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <h2>Followers:</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.login}</li>
        ))}
      </ul>
      <h2>Following:</h2>
      <ul>
        {following.map((follow) => (
          <li key={follow.id}>{follow.login}</li>
        ))}
      </ul>
      <h2>Bio:</h2>
      <p>{bio}</p>
    </div>
  );
}
