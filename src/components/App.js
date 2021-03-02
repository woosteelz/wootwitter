import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "../mybase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {});
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} woosteel</footer>
    </>
  );
}

export default App;
