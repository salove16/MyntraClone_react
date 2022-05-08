import { useState } from "react";
import "./addressinbagpage.css";


export const Address=()=>{

    const [customername,setcustomername]=useState({name:"text1",Address:"textaddress"})

    return(
    <div id="adressdiv">
        <div id="address1">
            <br/>
          <p>
            Deliver to :
            <strong id="userName">{customername.name}</strong> ,502205 <br />
          </p>
          <p>{customername.Address}</p>
        </div>
        <div id="address2">
          <button id="add2button" className="pink">CHANGE ADDRESS</button>
        </div>
      </div>
    )
}