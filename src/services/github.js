export const fetchUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json());
};

export const fetchRepos = (username) => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json());
};
