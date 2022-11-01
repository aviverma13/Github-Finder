import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// --------------------search users--------------------
export const searchUsers = async (text) => {
  //   setLoading();
  const params = new URLSearchParams({ q: text });
  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `token ${GITHUB_TOKEN}`,
  //   },
  // });
  // const { items } = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  // return items;
  const reponse = await github.get(`/search/users?${params}`);
  return reponse.data.items;
};

//get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};

/*
// --------------------Single users--------------------
export const getUser = async (login) => {
  // setLoading();

  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    // dispatch({
    //   type: "GET_USER",
    //   payload: data,
    // });
    return data;
  }
};
// ------------------------Get user repos -----------------
export const getUserRepos = async (login) => {
  // setLoading();
  const params = new URLSearchParams({ sort: "created", per_page: 10 });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  // dispatch({
  //   type: "GET_REPOS",
  //   payload: data,
  // });
  return data;
};
*/
