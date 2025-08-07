"use client";
import * as React from "react";
import Login from "./login";
import LandingPage from "./welcome/page";
import { useRouter } from 'next/navigation';

interface loginProps{
    handleLogin: () => void;
    isLoggedIn: boolean;
}

export default function Home() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  function handleLogin() {
    setLoggedIn(!loggedIn);
  }
  console.log(loggedIn);

  return (
    <div>

      <CheckLogin handleLogin={handleLogin} isLoggedIn={loggedIn}/>
    </div>
  );
}

function CheckLogin(
  {handleLogin, isLoggedIn}: loginProps
){
  React.useEffect(() => {
    if(isLoggedIn === true){
      window.history.replaceState(null, '', '/welcome');
    }
  })
  return(
    <Login handleLogin={handleLogin} isLoggedIn={isLoggedIn}/>
  );
}