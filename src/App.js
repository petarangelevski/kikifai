import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { Pecko, useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();


function App() {
  // const [token, setToken]= useState(null);
const [{ user, token },dispach] = Pecko();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token){

      dispach({
        type:"SET_TOKEN",
        token: _token,
      })

      spotify.getUserPlaylists().then((playlists) =>
     dispach({
       type: "SET_PLAYLISTS",
       playlists: playlists
     })
      )
      
      spotify.setAccessToken(_token); 
      spotify.getMe().then((user)=>{
        console.log(user);

        dispach({
          type:'SET_USER',
          user: user
        })
      });
    }
  }
  );
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
  
}

export default App;
