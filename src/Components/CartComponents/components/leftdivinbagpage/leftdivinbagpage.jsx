import { Address } from "./addrescard/address.jsx"
import { Cartproductsinbag } from "./cartproductsinbagpage/cartproductsinbagpage.jsx"
import { Offerslist } from "./offerspage/offerspage.jsx"



export const Leftdivinbagpage=()=>{


    return (
        <div style={{marginRight:"0.5%"}}>
           <Address/>
           < Offerslist/>
           <Cartproductsinbag/>
        </div>
    )

}