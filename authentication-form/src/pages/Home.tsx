import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom";

import { Typography } from "@mui/material";

const Home = () => {

  useEffect(() => {
    document.title = 'Home';
  }, [])

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => JSON.parse(localStorage.getItem("isLoggedIn")!)
  )

  if (!isLoggedIn) {
    localStorage.removeItem("isLoggedIn")
    return <Navigate to="/SignIn" />
  }

  return(
    <Typography variant="h1">
      Welcome to the Home Page
    </Typography>
  )
}

export default Home