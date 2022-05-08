import "./totalprice.css"
import vehicle from "../../images/vechilesymbol.png";
import { useContext } from "react"
import { Cartcontext } from "../../../contexts/cartcontext";
import { useNavigate } from "react-router-dom";


export const Totalprice=()=>{   

  const {cartlist,price,customername}=useContext(Cartcontext)
  const navigate=useNavigate();
    return (
        // <!-- price details -->
        <div id="pricedetails">
          {/* <!-- update using js --> */}
          <p id="pricedetails12">PRICE DETAILS</p>
          <div id="subpricedetails1">
            <div>Total MRP</div>
            <div id="mrpvalue">{price}</div>
            <div>Disocunt on MRP</div>
            <div id="dmrp" className="green1">0</div>
            <div>Coupon Discount</div>
            
            <div>
              {/* <!-- Trigger/Open The Modal --> */}
              <button id="myBtn1">Apply Coupon</button>

            <div/>
              
            </div>
            <div>Convenience Fee <span className="pink">Know More</span></div>
            <div className="green1">
              <span className="black strikedoff">₹99</span> FREE
            </div>
            <div></div>
          </div>
          <hr />
          <div id="tamount">
            <div>Total Amount</div>
            <div id="tamount1">{price}</div>
          </div>
          <div id="imgaboveplaceorder">
            <img src={vehicle} alt ="vehiclesymbol"/>
          </div>
          <div id="placeorderbutton">
            <button id="placeorder1" onClick={()=>{
                navigate("/payment")
            }}>CONTINUE</button>
          </div>
        </div>
      
    
  
    )
}