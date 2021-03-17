import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import LoginSignUp from "./pages/LoginSignUp.js";
import Main from "./pages/Main.js";
import { StoreProvider } from "./store/index";
// Import the useAuthTokenStore hook.
import { useAuthTokenStore } from "./utils/auth";

function App() {
  // Use the hook to reauthenticate stored tokens.
  useAuthTokenStore();

  // TODO remove StoreProvider?
  return (
    <Router>
      <StoreProvider>
        <LoginSignUp />
        <Main />
      </StoreProvider>
    </Router>
  );
}

export default App;

// --------------------------------------------------------------------------------------------------------//

// user authentication is a local state that starts as false, prompting Login page to start.
// Login page has the logic to change to true, which prompts the Login page to hide, and Main to show.
// --------------------------------------------------------------------------------------------------------//
//   return (
//     <Router>
//       <StoreProvider>
//         {isLoggedIn ? <Login /> : ""}
//         {isLoggedIn ? "" : <Main />}
//       </StoreProvider>
//     </Router>
//   );
// }
// --------------------------------------------------------------------------------------------------------//
