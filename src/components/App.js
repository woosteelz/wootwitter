import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "src/mybase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} woosteel</footer>
    </>
  );
}

export default App;
