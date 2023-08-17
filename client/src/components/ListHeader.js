import React, { useState } from "react";
import Model from "./Model";
import {useCookies} from 'react-cookie'


const ListHeader = ({ listName, getData }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)  //for creating cookies
  const [showMode, setShowModel] = useState(false)

  const signOut = () => {
    console.log("signout");
    removeCookie('Email')
    removeCookie('AuthToken')
    window.location.reload()
  };

  return (
    <div className="list-header">
      <h1 className="list_name1">{listName}</h1>
      <a className="list_name12" href="https://csb-dxtdge-chandanhm1999.vercel.app/" >Gallery 🌄</a>
      <div className="button-container">
        <button className="create" onClick={() => setShowModel(true)}>ADD NEW</button>
        <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
      {showMode && <Model mode={'create'} setShowModel={setShowModel} getData={getData}/>}
    </div>
  );
};

export default ListHeader;
