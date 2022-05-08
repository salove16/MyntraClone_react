import {useNavigate } from "react-router-dom";
import { Offerslist } from "../components/leftdivinbagpage/offerspage/offerspage";
import "./leftdiv.css";


export const Leftdiv=()=>{

  const navigate=useNavigate();
    return (
        <div>
            <Offerslist/>
            <p>Choose Payment Mode</p>   
            {/* payment mode          */}
            <div id="cardpay">
            <div id="rightpay">
              <img
                id="cardimage"
                src="https://icons-for-free.com/iconfiles/png/512/card+credit+card+debit+card+master+card+icon-1320184902079563557.png"
                alt=""
              />
              <h4 id="bankh">Credit/Debit Card</h4>
            </div>
            <div id="leftpay">
              <h4 id="bankh">Credit/Debit Card</h4>
              <input
                id="inputcard"
                required
                className="inputtext"
                type="number"
                placeholder="Card Number"
              />
              <input
                id="inputname"
                required
                className="inputtext"
                type="text"
                placeholder="Name on Card"
              />
              <div id="datecv">
                <input
                  id="inputdate"
                  required
                  className="inputtext"
                  type="date"
                  placeholder="Valid Thru(MM/YY)"
                />
                <input
                  id="inputcvv"
                  required
                  className="inputtext"
                  type="number"
                  placeholder="CVV"
                />
              </div>
              <input id="checkbox" required type="checkbox" />
              <span id="span">Save this Card for Faster Payment</span>
              <button id="paybtn" onClick={()=>{
                var orderid="abc"+Math.round(Math.random()*1258+1);
                alert(`Order Placed Successfully with Orderid  ${orderid}`)
                navigate("/");                
              }}>PAY NOW</button>
            </div>
          </div>
        </div>
        
    )
}