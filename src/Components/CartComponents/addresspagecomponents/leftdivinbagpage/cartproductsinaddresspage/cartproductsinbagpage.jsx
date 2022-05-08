import { useContext} from "react";
import { Cartcontext } from "../../../contexts/cartcontext";
import { Totalprice } from "../../rightdivinbag/totalpricecard/totalprice";
import "./cartproductsinbagpage.css";

export const Cartproductsinbag=()=>{

  const {cartlist,price,customername}=useContext(Cartcontext)     
      

    return (
        <div className="leftside">           
            
          <div id="productslist">
            {cartlist.map(function(e){
                return<div className="flex border">
                        <div ><img src={e.link} alt="productimage" width="50px" height="50px"/></div>
                        <div>
                            <p style={{paddingTop:"1%"}}>Estimated deliery by 16 May 2022</p>
                        </div>                      
                    </div> 
            })}
          </div>
          <div>
          <Totalprice/>
          </div>
        </div>
    )
}