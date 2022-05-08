import { useContext, useState } from "react"
import { Cartcontext } from "../../contexts/cartcontext"





export const Leftdivinbagpage=()=>{
    
    const {cartlist,price,customername}=useContext(Cartcontext)
    return (
        <div style={{textAlign:"left"}}>
           <div>Default Address</div>
           <div style={{border:"1px solid lightgrey"}}>
               <p>{customername.name}</p>
               <p>Address:{customername.Address}</p>
               <ul>
                <li>Cash on Delivery available</li>
               </ul>               
           </div>
        </div>       
    )

}