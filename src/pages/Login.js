import React from 'react'
import "./login.css";
import {accessToken}  from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from '../DataLayer';
function Login() {
  const [{user}, dispatch] = useDataLayerValue();
  
  const spotify = new SpotifyWebApi();
  spotify.setAccessToken(accessToken);
  console.log(accessToken)
  spotify.getMe().then((user) => {
    console.log(user);
    dispatch({
      type: "SET_USER",
      user: user
    })
  }
    
 )
 console.log(user)
  return (
    <div className='login'>
      <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'/>
    </div>
  )
}

export default Login
