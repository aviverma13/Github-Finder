import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    Loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //this fetches data of users and output in console(testing purpose)--------------------------
  // const fetchUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };
  //   ---------------------------------------------------------------------------
  //clear user from state
  // const clearUsers = () => dispatch({ type: "CLEAR_USERS" });
  //Set Loading
  // const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // users: state.users,
        // Loading: state.Loading,
        // user: state.user,
        // repos: state.repos,
        // fetchUsers,

        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
