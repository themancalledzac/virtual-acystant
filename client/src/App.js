import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./components/LoginSignUp";
import Main from "./pages/NavContainer";
import { StoreProvider, useStoreContext } from "./store/index.js";

// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

function App() {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();

  const [state] = useStoreContext();
  const useAuth = state.userAuth.token;
  console.log(state.userAuth.token);
  // console.log(state.userAuth.token.id);

  // TODO remove StoreProvider?
  return (
    <Router>
      <StoreProvider>{useAuth ? <Main /> : <LoginSignUp />}</StoreProvider>
    </Router>
  );
}

export default App;

// --------------------------------------------------------------------------------------------------------//

// {isLoggedIn ? <Main /> : <LoginSignUp />}
// user authentication is a local state that starts as false, prompting Login page to start.
// Login page has the logic to change to true, which prompts the Login page to hide, and Main to show.
// --------------------------------------------------------------------------------------------------------//
//   return (
//     <Router>
//       <StoreProvider>
//         {isLoggedIn ? <Login /> : <Main />}
//       </StoreProvider>
//     </Router>
//   );
// }
// --------------------------------------------------------------------------------------------------------//
